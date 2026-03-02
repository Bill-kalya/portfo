# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Deployment to GitHub Pages

The source code lives on the `main` branch, but Pages requires the *built* files. A GitHub Actions workflow (`.github/workflows/deploy.yml`) handles this automatically:

1. Push to `main` triggers the workflow.
2. Dependencies are installed and `npm run build` generates `dist/`.
3. The contents of `dist/` are published to the `gh-pages` branch.

**Important notes:**

- Do **not** commit `dist/` to `main`; it is ignored by `.gitignore`.
- Ensure your repository name is exactly `portfo` (case‑sensitive) so the base path `/portfo/` used in `index.html` matches.
- In the Pages settings, select the **gh-pages** branch and the **root** directory as the source.
- After deployment, open the live site and inspect the console for 404s or JS errors (e.g. React Three Fiber crashes).
