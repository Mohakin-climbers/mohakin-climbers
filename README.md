# Mohakin Climbers

## Development

Install Node.js and npm, then run:

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in the EmailJS values before testing inquiry submissions.

## EmailJS inquiries

Configure these values in `.env.local` for local development and in the Vercel project's environment variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Set the EmailJS template's recipient to `mohakinclimbers@gmail.com`. The template can use `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{phone}}`, `{{country}}`, `{{interest}}`, `{{group_size}}`, `{{preferred_dates}}`, and `{{message}}`.

## Vercel deployment

The production build prerenders linked routes as static HTML into `dist`. Import the GitHub repository into Vercel; `vercel.json` configures the Vite framework, `npm run build`, and `dist` as the output directory. Add the EmailJS environment variables above in Vercel, then redeploy.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
