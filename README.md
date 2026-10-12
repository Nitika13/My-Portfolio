# Nitika's Portfolio (Angular)

Multi-page portfolio built with Angular 20 (standalone components, lazy-loaded routes, SCSS).
Pages: Home, About, Experience, Projects, Skills, Contact.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
```

Requires Node 20.19+ or 22.12+.

## Edit your content

Everything (bio, links, projects, skills, certificates) lives in **`src/app/data.ts`**.
Your photo is **`public/nitika.jpg`**. Replace the file (keep the name) to change it.
Colours are CSS variables at the top of **`src/styles.scss`**.

## Build

```bash
npm run build      # output: dist/nitika-portfolio/browser
```

## Deploy

### Vercel
1. Push this folder to a GitHub repo.
2. Vercel > Add New Project > import the repo. `vercel.json` already sets the build command, output folder and the SPA rewrite, so just click Deploy.

### Netlify
1. Push to GitHub, then Netlify > Add new site > Import from Git.
2. `netlify.toml` already sets the build command, publish folder and the SPA redirect. Click Deploy.

(Or drag-and-drop the `dist/nitika-portfolio/browser` folder onto https://app.netlify.com/drop after `npm run build`.)
