# Lumastreet React homepage

A reusable React/Vite version of the Lumastreet homepage. It keeps the original copy, navy/orange styling, identity diagram, responsive layout, and lightweight motion.

## Run locally

1. Install Node.js.
2. Open this folder in a terminal.
3. Run npm install.
4. Run npm run dev.
5. Open the local URL printed by Vite.

Run npm run build to create a production site in dist/.

## Reusable entry point

The whole page is exported from src/components/LumastreetHome.jsx. It composes reusable header, hero, identity map, metrics, services, engagements, delivery, intelligence, industries, CTA, and footer components.

Import the component and stylesheet in another React app:

    import LumastreetHome from "./components/LumastreetHome.jsx";
    import "./styles.css";

    <LumastreetHome />

The page includes original placeholders such as [XX], [EMAIL], and [DATE]. Replace them with verified company details before publishing. CTA links currently point to the briefing section; connect them to the real contact flow when available.

Inter and Manrope Latin fonts are bundled locally. Motion uses CSS and the browser Intersection Observer; no 3D framework or animation dependency is added.
