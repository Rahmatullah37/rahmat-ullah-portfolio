# Rahmat Ullah Zadran: Portfolio Website

A personal portfolio built with **React, Vite, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons**.

All personal content lives in `src/data/`. You can update the site by editing those files only, without touching any UI component.

---

## 1. Install and run

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install        # install dependencies (node_modules is not included in the ZIP)
npm run dev        # start the dev server, usually http://localhost:5173
```

In VS Code: **File > Open Folder**, choose this folder, open the terminal with **Ctrl+`**, then run the commands above.

| Command | What it does |
|---|---|
| `npm run dev` | Development server with live reload |
| `npm run typecheck` | Checks TypeScript types without building |
| `npm run build` | Type-checks, then creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

---

## 2. Project architecture

```
rahmat-ullah-portfolio/
├── public/                  Static files served as-is
│   ├── images/              Profile photo, project screenshots, social share image
│   ├── icons/               Extra icons (empty for now)
│   ├── resume.pdf           Your CV (replace the placeholder)
│   ├── favicon.ico          Browser tab icon
│   ├── robots.txt           Search engine rules
│   └── sitemap.xml          Page list for search engines
├── src/
│   ├── assets/              Images imported from code (empty for now)
│   ├── components/
│   │   ├── common/          Small reusable pieces with no page knowledge
│   │   ├── layout/          Page frame: Navbar, Footer, BackToTop
│   │   └── sections/        One component per portfolio section
│   ├── pages/               HomePage: decides which sections appear and in what order
│   ├── data/                ALL your content (the files you will edit)
│   ├── hooks/               Reusable React hooks
│   ├── styles/              Tailwind setup, colour and font tokens
│   ├── utils/               Small pure helper functions
│   ├── types/               TypeScript interfaces for every data file
│   ├── App.tsx              Assembles layout and page
│   └── main.tsx             Entry point
├── index.html               SEO tags, Open Graph, Person schema
├── vite.config.ts           Vite config and site URL injection
├── tsconfig.json            TypeScript settings
├── .env.example             Environment variable template
└── package.json
```

### Important files

| File | Purpose |
|---|---|
| `src/data/profile.ts` | Name, tagline, biography, highlights, photo path, resume path |
| `src/data/education.ts` | Degrees |
| `src/data/experience.ts` | Jobs and roles |
| `src/data/skills.ts` | Skill groups |
| `src/data/projects.ts` | Project cards |
| `src/data/certifications.ts` | Certifications |
| `src/data/achievements.ts` | Achievements |
| `src/data/socialLinks.ts` | Email, LinkedIn, GitHub, Facebook, Google Scholar |
| `src/data/research.ts` | Research summary and publications |
| `src/data/services.ts`, `faq.ts`, `navigation.ts` | "What I do" rows, FAQ, menu links |
| `src/types/index.ts` | The shape of every data file (TypeScript will warn you if you get one wrong) |
| `src/styles/theme.css` | Colours and fonts |
| `src/pages/HomePage.tsx` | Order of sections on the page |
| `src/components/common/Section.tsx` | Shared section wrapper (spacing, heading) |
| `src/utils/stats.ts` | Hero numbers, counted automatically from your data |

### Design rules used in the code
- One responsibility per component. Sections read data and render it. Common components know nothing about the page.
- No content inside components. Text, links and lists come from `src/data/`.
- Placeholders: any text inside `[INSERT ...]` or `[PLACEHOLDER: ...]` is highlighted in amber on the page so you can see what is left to fill in.
- Components use PascalCase file names, data and utility files use camelCase.

---

## 3. Update your personal information

Edit only the file for that topic, save, and the browser refreshes.

- **Name, bio, tagline:** `src/data/profile.ts`
- **Profile picture:** save your photo as `public/images/profile.jpg` (or change `photo` in `profile.ts`). Keep it under about 300 KB.
- **Resume:** replace `public/resume.pdf` with your CV, keeping the file name.
- **Education / experience / skills / certifications / achievements:** the matching file in `src/data/`. Copy an existing entry and edit it.
- **Social links and email:** `src/data/socialLinks.ts`. For email use only the address. Replacing a `[INSERT ...]` value turns it into a working link.
- **Colours and fonts:** `src/styles/theme.css` (and the font link in `index.html`).

Only add information you can verify: dates, awards and publications should be real.

---

## 4. Add a new project

1. Optional: put a screenshot in `public/images/projects/`, for example `my-app.jpg`.
2. Add an entry to the array in `src/data/projects.ts`:

```ts
{
  id: 'my-app',                       // unique, lowercase, no spaces
  title: 'My App',
  description: 'One or two sentences about what it does.',
  technologies: ['C#', 'ASP.NET Core'],
  image: '/images/projects/my-app.jpg',  // optional
  githubUrl: 'https://github.com/you/my-app',
  demoUrl: 'https://my-app.example.com',
}
```

Use `'[INSERT LINK]'` for a link you do not have yet.

---

## 5. Add a new portfolio section

Example: a "Languages" section.

1. **Type:** add `interface LanguageEntry { name: string; level: string }` to `src/types/index.ts`.
2. **Data:** create `src/data/languages.ts` exporting `languages: LanguageEntry[]`.
3. **Component:** create `src/components/sections/Languages.tsx` and wrap its content in the shared `Section` component:

```tsx
import { languages } from '../../data/languages'
import Section from '../common/Section'

export default function Languages() {
  return (
    <Section id="languages" title="Languages">
      <ul>{languages.map((l) => <li key={l.name}>{l.name}: {l.level}</li>)}</ul>
    </Section>
  )
}
```

4. **Page:** import it in `src/pages/HomePage.tsx` and place `<Languages />` where you want it.
5. **Menu (optional):** add `{ id: 'languages', label: 'Languages' }` to `src/data/navigation.ts`.

To remove a section, delete its line from `HomePage.tsx`.

---

## 6. SEO and Google visibility

1. Copy `.env.example` to `.env` and set `VITE_SITE_URL` to your real domain. This fills the canonical URL and Open Graph tags in `index.html`.
2. Replace `www.your-domain.com` in `public/robots.txt` and `public/sitemap.xml`.
3. In `index.html`, add your LinkedIn, GitHub and Scholar URLs to `"sameAs"` in the Person schema.
4. Replace `public/images/og-image.svg` with a 1200x630 PNG (some platforms ignore SVG) and update the `og:image` line in `index.html`.
5. After publishing, add the site to Google Search Console and submit `sitemap.xml`.

Good structure helps Google find the site, but no one can guarantee rankings. Indexing can take days to weeks.

---

## 7. Build and deploy

```bash
npm run build
```

The finished site is created in `dist/`.

**Vercel:** push the project to GitHub, then at vercel.com choose **Add New > Project**, import the repository and click **Deploy**. Vite is detected automatically. Add `VITE_SITE_URL` under **Settings > Environment Variables**.

**Netlify:** push to GitHub, then at app.netlify.com choose **Add new site > Import an existing project**. Build command `npm run build`, publish directory `dist`. Add `VITE_SITE_URL` under **Site configuration > Environment variables**.

**Custom domain:** in Vercel (**Project > Settings > Domains**) or Netlify (**Domain management**), add your domain and copy the DNS records shown into your domain registrar. HTTPS is set up automatically.
