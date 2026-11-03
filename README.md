# Maria Rabel — Data Engineering & AI Portfolio

A fast, responsive personal portfolio showcasing software and data engineering work through verified GitHub repository links.

**Stack:** semantic HTML, CSS, vanilla JavaScript (ES modules), built-in Node.js tests, GitHub Actions CI. No framework or third-party analytics required.

## Sections

- Hero and profile summary
- Selected project cards with tag-based filtering
- Data platform and AI skills
- Contact links through public GitHub profile (no personal contact information embedded)

## Preview locally

```bash
python -m http.server 8000
```

Open http://localhost:8000. Use Node.js 20+ for tests:

```bash
npm test
```

## Publish via GitHub Pages

Open **Settings → Pages → Deploy from a branch → main / (root)**. Hosting must be enabled by the repository owner.

## Customize the content

- Change the intro and experience wording in `index.html`.
- Add or edit GitHub projects in `src/projects.js`.
- Change the palette in `styles.css`.
- Add LinkedIn or an email link only after you decide what details you want public.

Project cards link to source code, **not** live deployments. The Banking Lakehouse and Real-Time AI pipeline include local/experimental and reference-cloud features, not claims of production deployment. The site uses no external image, analytics or font resources.
