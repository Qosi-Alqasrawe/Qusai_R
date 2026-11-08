# Qusai Fawzi Awwad: Portfolio

Personal portfolio for an Industrial Engineer (supply chain, manufacturing, ERP, data analytics).
Live site: https://qusai-cv.netlify.app/

## Stack
- React 19 + Vite
- Framer Motion (scroll reveals, nav indicator, case study transitions; respects `prefers-reduced-motion`)
- Self-hosted fonts via `@fontsource-variable` (Inter, Space Grotesk, JetBrains Mono)
- Netlify (build + Netlify Forms for the contact form)

## Develop
```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content
All text lives in `src/data/content.js` (profile, experience, case studies, skills, credentials, achievements).
Add numbers or results only after they are verified.

- CV file: `public/Qusai-Awwad-CV.pdf` (replace the file, keep the name)
- Portrait: `src/assets/qusai.webp`
- Case study diagrams: `src/components/Visuals.jsx`

## Deployment
`netlify.toml` sets `npm run build` and publishes `dist/`. The contact form is detected by Netlify Forms
through the hidden form in `index.html`.
