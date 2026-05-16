# TODO

- [x] Inspect Vite + index.html base path configuration
- [x] Identify /portfo/ subdirectory asset 404 root cause (base path / absolute URLs)
- [x] Add `vercel.json` rewrite so SPA loads on refresh under `/portfo/`
- [x] Add `.env.production` with BASE_URL=/portfo/ (for any code that uses it)
- [ ] Verify build output and asset URLs (vite build + check dist)
- [ ] Ensure favicon/icon paths resolve (public/icon.png referenced as `/portfo/icon.png`)

