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

Import the GitHub repository into Vercel and use `npm run build` as the build command. Nitro's Vercel preset outputs to `.vercel/output`, and `vercel.json` directs Vercel there instead of the default `dist`. Add the EmailJS environment variables above in Vercel, then redeploy.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
