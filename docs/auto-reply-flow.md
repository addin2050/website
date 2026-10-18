# Contact form auto-reply with Power Automate

The site form POSTs JSON to a Power Automate flow, which (1) emails the visitor an
automatic reply from the mailbox of your choice and (2) forwards the message to you.

## 1. Build the flow (make.powerautomate.com > Create > Instant cloud flow)

Trigger: **When an HTTP request is received**. Request body JSON schema:

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string" },
    "message": { "type": "string" },
    "source": { "type": "string" }
  }
}
```

Actions:
1. **Send an email (V2)** (Office 365 Outlook). To: `email` from the trigger.
   Subject: `Thanks for contacting Abi Sarasan`. Body: a short thank-you saying
   you will reply soon. To send from the other mailbox, use
   **Send an email from a shared mailbox (V2)** and pick that mailbox
   (needs Send As permission), or sign the connection in with that account.
2. **Send an email (V2)** to yourself with the visitor's name, email and message.
3. **Response**: status 200.

## 2. Connect the site

Copy the trigger's **HTTP POST URL** and set it as `VITE_CONTACT_WEBHOOK`:
- local: put it in `.env.local` (git-ignored)
- Netlify: Site configuration > Environment variables, then redeploy

The URL contains a signature key. Anyone who finds it can trigger the flow, so keep it
out of git and consider adding a Condition in the flow to drop requests where
`email` is empty.
