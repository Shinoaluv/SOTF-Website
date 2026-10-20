/* THESIS: A welcoming, optional conversation helps visitors find their next step.
OWN-WORLD: Existing blue actions, navy headings, white reading surface, flat borders.
STORY: Ask a question, read a grounded answer, follow an official link or contact the team.
FIRST VIEWPORT: A labeled bottom-right launcher opens a compact conversation and three prompts.
FORM: Local extension of the established website; a nonmodal, mobile-friendly chat panel. */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { suggestions, topics, welcome, websiteAnswer } from '../chatKnowledge.js';
import './Chatbot.css';

function Destination({ topic, onNavigate }) {
  return topic.href.startsWith('/')
    ? <Link to={topic.href} onClick={onNavigate}>{topic.title} →</Link>
    : <a href={topic.href} target="_blank" rel="noopener noreferrer">{topic.title} ↗</a>;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState(null);
  const launcher = useRef(null);
  const input = useRef(null);
  const conversation = useRef(null);
  const pending = useRef(null);
  const inFlight = useRef(false);

  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight;
  }, [messages, busy, open]);
  useEffect(() => () => pending.current?.abort(), []);

  function close() { setOpen(false); launcher.current?.focus(); }

  async function send(question = draft) {
    const content = question.trim();
    if (!content || content.length > 1000 || inFlight.current) return;
    inFlight.current = true;
    const next = [...messages, { role: 'user', content }];
    setMessages(next); setDraft(''); setError(''); setBusy(true);
    const controller = new AbortController();
    pending.current = controller;
    const timer = setTimeout(() => controller.abort(), 22000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-9).map(({ role, content }) => ({ role, content: content.slice(0, 1600) })) }),
        signal: controller.signal,
      });
      if (response.status === 429) throw new Error('rate-limit');
      if (!response.ok) throw new Error('unavailable');
      const answer = await response.json();
      if (typeof answer.text !== 'string' || !answer.text.trim()) throw new Error('unavailable');
      setMode(answer.mode === 'ai' ? 'ai' : 'guide');
      setMessages([...next, { role: 'assistant', content: answer.text, sourceIds: Array.isArray(answer.sourceIds) ? answer.sourceIds : [], notice: answer.notice }]);
    } catch (cause) {
      const answer = websiteAnswer(content);
      setMode('guide');
      setError(cause.message === 'rate-limit' ? 'You’ve sent several questions. Please wait a minute before asking again.' : 'AI replies are unavailable right now. You can still use our website guide.');
      setMessages([...next, { role: 'assistant', content: answer.text, sourceIds: answer.sourceIds }]);
    } finally {
      clearTimeout(timer); pending.current = null; inFlight.current = false; setBusy(false);
    }
  }

  return <div className="sotf-chat">
    {open && <section id="sotf-chat-panel" className="chat-panel" role="dialog" aria-labelledby="chat-title" aria-describedby="chat-disclosure" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
      <header className="chat-header">
        <div><h2 id="chat-title">Ask Sound of the Future</h2><p>{mode === 'guide' ? 'Website guide' : mode === 'ai' ? 'AI website assistant' : 'Website guide · AI when connected'}</p></div>
        <button className="chat-close" type="button" aria-label="Close chat" onClick={close}>×</button>
      </header>
      <div className="chat-transcript" ref={conversation} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions text" aria-busy={busy}>
        <div className="chat-message chat-assistant"><span className="chat-speaker">Sound of the Future</span><p>{welcome}</p></div>
        {messages.map((message, index) => <div key={index} className={`chat-message chat-${message.role}`}>
          <span className="chat-speaker">{message.role === 'user' ? 'You' : 'Sound of the Future'}</span>
          {message.notice && <p className="chat-notice">{message.notice}</p>}
          <p>{message.content}</p>
          {message.sourceIds?.length > 0 && <div className="chat-destinations">{topics.filter(topic => message.sourceIds.includes(topic.id)).map(topic => <Destination key={topic.id} topic={topic} onNavigate={() => setOpen(false)} />)}</div>}
        </div>)}
        {busy && <p className="chat-thinking" role="status">Finding an answer…</p>}
      </div>
      {messages.length === 0 && <div className="chat-suggestions" aria-label="Suggested questions">{suggestions.map(question => <button key={question} type="button" onClick={() => send(question)}>{question} <span aria-hidden="true">↗</span></button>)}</div>}
      {error && <p className="chat-error" role="status">{error}</p>}
      <form className="chat-form" onSubmit={event => { event.preventDefault(); send(); }}>
        <label className="chat-input-label" htmlFor="chat-question">Your question</label>
        <div className="chat-compose"><input ref={input} id="chat-question" value={draft} onChange={event => setDraft(event.target.value)} maxLength={1000} placeholder="Ask about our work…" autoComplete="off" /><button type="submit" disabled={busy || !draft.trim()}>Send <span aria-hidden="true">↑</span></button></div>
      </form>
      <footer className="chat-footer"><p id="chat-disclosure">AI replies may make mistakes. Messages are sent to OpenAI when AI is connected. Please avoid personal or medical details.</p><div><Link to="/contact" onClick={() => setOpen(false)}>Contact our team</Link><button type="button" disabled={busy || messages.length === 0} onClick={() => { setMessages([]); setError(''); input.current?.focus(); }}>New chat</button></div></footer>
    </section>}
    <button ref={launcher} className="chat-launcher" type="button" aria-expanded={open} aria-controls="sotf-chat-panel" onClick={() => open ? close() : setOpen(true)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H4l-2 2v-10a9 9 0 0 1 18 0Z" /><path d="M7 10h8M7 14h5" /></svg>
      {open ? 'Close chat' : 'Ask us a question'}
    </button>
  </div>;
}
