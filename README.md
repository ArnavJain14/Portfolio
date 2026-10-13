# Arnav Jain · QA Engineer Portfolio

This is the portfolio of my work that i have done till date and also the skills that i have worked on other then my domain which I am working on

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Project structure

```
src/
  app/
    layout.tsx            fonts, metadata, navbar + footer
    page.tsx              home page: puts the sections in order
    globals.css           colour and font tokens (Tailwind @theme)
    not-found.tsx         404 page
    projects/[slug]/page.tsx  one case-study page per project
  components/             one file per section (Hero, Projects, Experience, ...)
  data/
    profile.ts            name, contact, intro, experience, skills, education, certifications
    pm.ts                 product management coursework and case studies
    workbench.ts          work in progress (move to projects.ts when finished)
    projects.ts           projects and their case-study content
public/
  Arnav_Jain_QA_Resume.pdf   (add this file, the Resume button links to it)
```

To change any text, edit the files in `src/data/`. You don't need to touch the components.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, choose **Add New → Project** and import the repository.
3. Keep the defaults (Vercel detects Next.js) and click **Deploy**.

Every push to `main` redeploys the site.
