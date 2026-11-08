# AuraCuts — Cinematic Video Editor Portfolio

Next.js portfolio for a senior video editor / motion graphics designer, ported from the original React + Three.js design.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Three.js (hero WebGL scene)
- Lucide React icons
- Yarn

## Folder structure

```text
src/
  app/                 # Next.js routes, layout, global styles
  components/
    layout/            # Header, Footer
    sections/          # Hero, Showreel, Projects, Skills, Workflow, Stats, Testimonials, Contact
    modals/            # Video + Deploy modals
    three/             # WebGL hero canvas
  data/                # Portfolio content (projects, skills, etc.)
  lib/                 # Helpers
  types/               # Shared TypeScript types
public/                # Static assets
```

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `yarn dev`    | Start development server |
| `yarn build`  | Production build         |
| `yarn start`  | Run production server    |
| `yarn lint`   | Run ESLint               |
