# blkatlantic.com

**Live site:** [blkatlantic.com](https://blkatlantic.com)

A creative-brand site for bandleader Jean-Francis Varre. It brings together his projects, which explore the music and history of the African diaspora: the band **Sahel**, **Atlantic Aerial** (drone videography), the **Afrocidade** performance (connecting Washington DC and Salvador, Bahia), and the **Clave** workshop series.

## Features

- **Project cards** with embedded YouTube video. Some link out to sister sites (Sahel, Atlantic Aerial) and others to internal pages.
- **Afrocidade page** with its own landing content (also the current home route).
- **"Pillars" about section**: Oral Cultures, the Ubiquity of African Cultures, and History Humanizes. It's driven by `data/about.js`.
- Each project has its own accent color, defined as Tailwind theme tokens.
- **Contact page** and a responsive navbar.
- Page transitions and animation with Framer Motion.

## Tech stack

| Layer | Tools |
|---|---|
| Framework | React 19, Vite 7 |
| Routing | React Router |
| Styling | Tailwind CSS 3 (custom theme colors) |
| Motion | Framer Motion |
| Hosting | Netlify (SPA redirects via `public/_redirects`) |

## Project structure

```
src/
  pages/                    Afrocidade, About, Projects, Contact, Clave
  components/layout/        Navbar
  components/sections/      Hero
  components/ui/            ProjectCard, PillarCard
  data/                     projects.js, about.js (content lives here)
```

## Running locally

```bash
npm install
npm run dev
```

---
Designed and developed by **Ayodele Owolabi**, [AO Studio](https://github.com/ayodeleowolabi).
