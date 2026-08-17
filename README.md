# Codestroom

Marketing site for Codestroom — a digital marketing agency serving restaurants, religious
organizations, entrepreneurs, public leaders and e-commerce businesses across India, Canada,
the USA and Europe.

Built with React 19, React Router and Vite.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Environment variables

Copy `.env.example` to `.env` and fill in the values:

| Variable | Description |
| --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint used by the contact form (e.g. `https://formspree.io/f/xxxxxxxx`). Without it, the contact form falls back to showing an error with a mailto link. |

`.env.test` is committed with a placeholder endpoint so the test suite runs deterministically
regardless of your local `.env`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |
| `npm test` | Run the test suite (Vitest + React Testing Library) |

## Project structure

```
src/
  components/   Shared UI building blocks (Header, Footer, Hero, CTA, etc.)
  pages/        Route-level page components, composed from components/
  App.jsx       Route definitions
public/
  assets/       Static assets (logo, etc.)
  robots.txt, sitemap.xml
```
