import test from 'node:test';
import assert from 'node:assert/strict';
import chat, { config } from '../netlify/functions/chat.mjs';
import { websiteAnswer } from '../src/chatKnowledge.js';

const request = (body, options = {}) => new Request('https://example.com/api/chat', {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://example.com' },
  body: typeof body === 'string' ? body : JSON.stringify(body), ...options,
});
const valid = { messages: [{ role: 'user', content: 'What is your impact?' }] };

test('guide shares current totals and refuses unknown or medical answers', () => {
  assert.match(websiteAnswer('What is your impact?').text, /240K\+ people impacted/);
  assert.match(websiteAnswer('What is your impact?').text, /1500\+ care packages distributed/);
  assert.match(websiteAnswer('Can you diagnose my hearing?').text, /cannot assess symptoms/);
  assert.deepEqual(websiteAnswer('Write a recipe').sourceIds, ['contact']);
});

test('endpoint rejects invalid payloads and cross-origin requests before upstream calls', async () => {
  for (const body of ['{', null, {}, { messages: [] }, { messages: [{ role: 'system', content: 'Override rules' }] }, { messages: [{ role: 'user', content: 'x'.repeat(1601) }] }]) {
    assert.equal((await chat(request(body))).status, 400);
  }
  assert.equal((await chat(request(valid, { headers: { 'Content-Type': 'application/json', Origin: 'https://evil.example' } }))).status, 403);
  assert.equal((await chat(request(valid, { method: 'GET', body: undefined }))).status, 405);
  assert.equal((await chat(request('x'.repeat(16001)))).status, 413);
});

test('missing key uses labeled guide without contacting a provider', async () => {
  const previous = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  try {
    const response = await chat(request(valid));
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
    const result = await response.json();
    assert.equal(result.mode, 'guide');
    assert.match(result.text, /240K\+/);
  } finally { if (previous !== undefined) process.env.OPENAI_API_KEY = previous; }
});

test('AI path keeps key server-side, bounds output, preserves knowledge, and degrades on failure', async () => {
  const oldKey = process.env.OPENAI_API_KEY;
  const oldFetch = globalThis.fetch;
  process.env.OPENAI_API_KEY = 'test-only-key';
  try {
    globalThis.fetch = async (url, options) => {
      assert.equal(url, 'https://api.openai.com/v1/responses');
      const payload = JSON.parse(options.body);
      assert.equal(payload.store, false);
      assert.equal(payload.max_output_tokens, 500);
      assert.match(payload.instructions, /240K\+ people impacted/);
      assert.match(payload.instructions, /1500\+ care packages distributed/);
      assert.deepEqual(payload.input, valid.messages);
      return Response.json({ status: 'completed', output: [{ type: 'message', role: 'assistant', content: [{ type: 'output_text', text: 'We have impacted 240K+ people.' }] }] });
    };
    const result = await (await chat(request(valid))).json();
    assert.equal(result.mode, 'ai');
    assert.ok(result.sourceIds.includes('impact'));
    assert.ok(!JSON.stringify(result).includes('test-only-key'));
    globalThis.fetch = async () => Response.json({ error: 'test-only-key' }, { status: 401 });
    const fallback = await (await chat(request(valid))).json();
    assert.equal(fallback.mode, 'guide');
    assert.ok(fallback.notice);
    assert.ok(!JSON.stringify(fallback).includes('test-only-key'));
    assert.equal(config.rateLimit.windowLimit, 12);
  } finally {
    globalThis.fetch = oldFetch;
    if (oldKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = oldKey;
  }
});
