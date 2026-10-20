# Visitor chatbot

The chatbot is available on every route. It uses the website’s current impact statistics from `src/data.js`. Curated organization information lives in `src/chatKnowledge.js`; update this when programs or contact information change.

## Activate AI replies

1. In the Netlify project hosting this site, add an environment variable named `OPENAI_API_KEY` with your OpenAI API key. Include the Functions runtime scope and the production deploy context. Do not put the key in source files, browser code, chat, or a variable starting with `VITE_`.
2. Optionally set `OPENAI_MODEL`. The default is `gpt-4.1-mini`.
3. Deploy the whole project through Netlify’s Git integration or a full Netlify CLI deploy including functions. Uploading only the `dist` folder does not deploy the AI endpoint.
4. Open the chat and ask “What is your impact?” Check that it returns 240K+ people impacted and 1500+ care packages distributed and displays “AI website assistant.” Try a follow-up, donation question, unknown upcoming event, and a personal medical question.

Without a key, the chatbot answers common topics with a clearly labeled website guide. If AI fails, the guide remains available. AI answers use an OpenAI Responses endpoint; `store: false` disables response application storage, but does not imply zero retention by the provider. No conversation is saved in browser storage or logged by this application. Conversations stay in memory until the page reloads or the visitor selects New chat. A bounded recent history is sent with each AI request.

The endpoint caps message sizes, conversation length, reply length, and upstream time. Netlify's configured limit is 12 requests per minute per IP/domain; confirm rate limiting is applied to the deployed site. Configure OpenAI project usage controls before enabling public AI access; a per-IP limit is not a total spending cap.

The bot provides information and links only. It does not send email, enroll volunteers, collect payment, confirm care package availability, or provide medical advice.

## Local checks

`npm run build`, `npm run lint`, and `node --test tests/chat.test.mjs`.

The Vite-only preview uses the website guide when the endpoint is absent. Use Netlify Dev with a server-only `.env` file (ignored by Git) to test actual AI replies locally. No live AI call has been verified without an API key.

References: [OpenAI Responses API](https://developers.openai.com/api/docs/guides/migrate-to-responses), [Netlify Functions configuration](https://docs.netlify.com/build/functions/api/).
