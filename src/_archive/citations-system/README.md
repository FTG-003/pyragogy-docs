# Citations System — Archived Scaffolding

**Status:** Parked. Not wired into the build.
**Archived on:** 2026-05-14
**Original location → archived location:**
- `src/content/citations/` → `content-citations/` (6 .md entries, mix of real + 4 placeholder fake-DOI)
- `src/types/citations.ts` → `types-citations.ts`
- `src/components/CitationCard.astro` → `CitationCard.astro`
- `src/components/CitationStats.astro` → `CitationStats.astro`
- `src/components/RandomCitation.astro` → `RandomCitation.astro`
- `scripts/add-citation.js` → `add-citation.js`

## What this was

A data-driven citations system: Astro content collection + TypeScript types + 3 Astro components + CLI script to add entries. Designed to make the `/citations` page render dynamically from `src/content/citations/*.md` files.

## Why it's archived

Never wired up. The Astro 5 active config (`src/content.config.ts`) does not register the `citations` collection, so `getCollection('citations')` returns empty. The public `/citations` page is hand-curated MDX (`src/content/docs/citations.mdx`) and works independently. The 6 .md files in the collection were invisible to the site. 4 of them contain fake placeholder DOIs (10.1000/* IETF-reserved prefix) — these should be DELETED if/when the system is revived.

## When to revive

When the citations corpus grows beyond ~30 entries OR when filtering/search/stats on /citations becomes a real need. Below that scale, hand-curated MDX is simpler.

## How to revive

1. Move files back to original locations (reverse the `git mv`s above)
2. Register collection in `src/content.config.ts`:
   ```ts
   import { defineCollection, z } from 'astro:content';
   const citations = defineCollection({ schema: z.object({...}) });
   export const collections = { docs, citations };
   ```
3. Delete the 4 fake-DOI files (ai-enhanced-collaborative-learning, ai-enhanced-peeragogy, cognitive-rhythm-theory, community-based-learning-framework).
4. Rewrite `src/content/docs/citations.mdx` to use `getCollection('citations')` + `<CitationCard>`.
5. Verify `RandomCitation.astro` import path if you mount it somewhere.
6. Update `add-citation.js` if file paths changed.
