# Visitor chatbot — Groq free tier

The assistant uses Groq rather than the paid OpenAI API. No ChatGPT subscription or OpenAI API key is needed. It defaults to `openai/gpt-oss-20b`, an open-weight model served by Groq; the key and account are from Groq.

## Activate AI replies

1. Create a free account at https://console.groq.com and create an API key at https://console.groq.com/keys. Stay on the Free plan for free usage; quotas apply. Check your account's current limits at https://console.groq.com/settings/limits.
2. In your site's Netlify project, open Project configuration → Environment variables. Add `GROQ_API_KEY` with the key value, including the Functions runtime scope and production context. Never put the key in browser code, source files, chat, or a `VITE_` variable.
3. Optionally set `GROQ_MODEL` to `openai/gpt-oss-20b` (the default). Remove obsolete `OPENAI_API_KEY` and `OPENAI_MODEL` variables if present.
4. Redeploy the whole project with functions using Netlify's Git integration or CLI. Uploading only `dist` does not deploy the AI endpoint.
5. Open the assistant and ask about impact, volunteering, and a follow-up. Connected answers display “AI website assistant.” Confirm current totals and the three online service roles. Try an unknown event and personal medical question.

Without a key, or when Groq is unavailable or its free quota is exhausted, the assistant returns the labeled website guide. It never switches to a paid provider. If you upgrade your Groq account, provider billing follows that account's plan; remain on Free if you want free-only usage.

## Data and behavior

A bounded recent conversation and public website knowledge are sent server-side to Groq for AI replies. The visitor disclosure names Groq. This application does not save conversations in browser storage or log them; they stay in memory until reload or New chat. Provider handling is governed by Groq's data policies: https://console.groq.com/docs/your-data.

Keys stay server-side. Request validation, message and output bounds, timeout, curated navigation links, and Netlify's 12 requests per minute per IP/domain limit remain enabled. Confirm the rate limit on the deployed site. Shared Groq account quotas may be reached sooner than the per-visitor limit.

The assistant provides information and links only. It does not email, enroll volunteers, collect payments, promise availability, or give medical advice. Organization facts live in `src/chatKnowledge.js`; impact totals come from `src/data.js`.

## Checks

Run `npm run build`, `npm run lint`, and `node --test tests/chat.test.mjs`. Tests mock Groq responses, including exhausted quota and malformed or truncated answers. Live AI replies cannot be verified until a valid key is configured.

Vite alone uses the website guide when the endpoint is absent. Use Netlify Dev and an ignored server-only `.env` for local AI testing.

References: https://console.groq.com/docs/quickstart, https://console.groq.com/docs/rate-limits, https://console.groq.com/docs/api-reference.
