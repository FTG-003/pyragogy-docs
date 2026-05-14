# Diario Index — Failed Attempts

**Archived:** 2026-05-14
**Status:** Three broken attempts to build a diary index page.

## Files
- `diario.astro` — bare Astro component, broken getCollection arg
- `index.astro` — StarlightPage wrapper, correct collection query, wrong URL template
- `pages-diario.astro` — byte-identical duplicate of diario.astro

## Why they're broken

All three were placed inside `src/content/docs/`, where Starlight's content loader ignores `.astro` files. They never reached the build as routable pages.

## When the real diary index is built

See planned feature branch `feature/diario-section`. The correct path for an Astro route is `src/pages/diario/index.astro`. Use Attempt #2 (`index.astro`) as starting reference — it has the most correct architecture (uses Starlight BaseLayout + StarlightPageProps). URL template needs fix: remove `/docs/` prefix.
