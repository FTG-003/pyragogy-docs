# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build production site to ./dist
- `npm run preview` - Preview built site locally
- `npm run astro` -- --help - Show Astro CLI help (or run specific Astro commands)
- `node scripts/add-citation.js` - Add new citation to the citations collection

## Architecture Overview
- **Framework**: Astro 5 with Islands Architecture for optimal performance
- **Documentation Theme**: @astrojs/starlight providing built-in search, navigation, and layouts
- **Styling**: Tailwind CSS 4 with custom configuration in tailwind.config.js
- **Content**: MDX and Markdown files in `src/content/docs/` organized by collections
- **Components**: Astro components (.astro files) in `src/components/` including custom UI elements and Starlight overrides
- **Styling**: Global CSS in `src/styles/` directory
- **Assets**: Images, fonts, and static files in `public/` and `src/assets/`
- **Configuration**:
  - Main config: `astro.config.mjs` (site settings, integrations, sidebar)
  - Content collections: `src/content.config.ts` (Astro 5 reads this file, not the legacy one)
    - Note: `src/content/config.ts` exists but is dead code (legacy from Astro 4 migration). Defines diarySchema/otherDocsSchema/citationsSchema that are not used by the build. To be removed in a separate cleanup task.
  - Sidebar navigation: `src/content/sidebar.ts` (defines navigation structure)
  - Markdown processing: Configured with remark-math and rehype-katex for LaTeX support

## Content Structure & Schemas
- **Documentation**: `src/content/docs/` - Primary content organized by categories
  - `core/` - Foundational content (manifesto, principles, timeline, etc.)
  - `diary/` - Blog/journal entries with subdirectories for dates (YYYY-MM-DD format)
  - Uses content collections with schemas defined in `src/content/config.ts`:
    - `diarySchema`: Requires title, date; optional tags and description
    - `otherDocsSchema`: Requires title; optional description, date, tags
    - `citationsSchema`: For managing academic/bibliographic references (see scripts/add-citation.js)
- **Configuration**: Content types and schemas defined in `src/content/config.ts`
- **Navigation**: Sidebar structure defined in `src/content/sidebar.ts`

## Development Workflow
1. Create feature branch: `git checkout -b feature/description`
2. Make changes to:
   - Content: Edit `.md` or `.mdx` files in `src/content/docs/`
     - For diary entries: Create folder with date format (YYYY-MM-DD-title) in `src/content/docs/diario/diary/`
     - For citations: Use `node scripts/add-citation.js` or edit directly in content collection
   - Components: Modify `.astro` files in `src/components/`
   - Styles: Update `src/styles/` or `tailwind.config.js`
   - Config: Adjust `astro.config.mjs`, `content.config.ts`, or `sidebar.ts` as needed
3. Test locally: `npm run dev` (server at http://localhost:4321 with hot reload)
4. Build for production: `npm run build` (outputs to ./dist)
5. Preview build: `npm run preview`
6. Commit changes: `git commit -m 'Descriptive commit message'`
7. Push branch: `git push origin feature/description`
8. Create pull request

## Key Technologies & Integrations
- **Astro**: Core framework with island architecture
- **Starlight**: Documentation theme providing search, tabs, components, and layout
- **TailwindCSS**: Utility-first styling (v4)
- **MDX**: Markdown with JSX support for interactive components
- **Partytown**: Offloads third-party scripts to web workers for performance
- **Sitemap**: Automatically generates sitemap.xml
- **Math Rendering**: KaTeX integration via remark-math and rehype-katex plugins
- **Icons**: Astro Icon integration for SVG icons
- **Content Collections**: Typed content with Zod schemas for validation
- **SEO**: @astrolib/seo integration for metadata optimization

## File Conventions
- **Content**: `.md` or `.mdx` files in `src/content/docs/` with frontmatter for metadata
  - Diary entries: `src/content/docs/diario/diary/YYYY-MM-DD-title/index.md` or `.mdx`
  - Core docs: `src/content/docs/core/*.md` or `.mdx`
  - Citations: Managed via content collection (see citationsSchema)
- **Components**: `.astro` files in `src/components/` (can be used in MDX via `import`)
- **Styles**:
  - Global CSS: `src/styles/global.css` (imported in astro.config.mjs)
  - Component-specific: CSS modules or inline styles in `.astro` files
  - Tailwind: Utility classes in HTML/MDX, config in `tailwind.config.js`
- **Assets**:
  - Public: `public/` for favicons, robots.txt, etc.
  - Source: `src/assets/` for images referenced in components/styles
- **Configuration**:
  - Main: `astro.config.mjs`
  - Content: `src/content.config.ts` (defines collections and schemas)
  - Navigation: `src/content/sidebar.ts`
  - Scripts: `scripts/` directory contains utility scripts like `add-citation.js`

## Getting Started
To contribute to the documentation:
1. Content is primarily Markdown/MDX with YAML frontmatter for metadata (title, description, etc.)
2. Custom components can be created in `src/components/` and imported/used in MDX
3. Styling follows Tailwind utility classes with optional custom CSS
4. Images and assets should be placed in `public/` or `src/assets/` and referenced relatively
5. Mathematical expressions can be written using LaTeX syntax (`$$...$$` or `$...$`)
6. For diary entries, follow the date-based folder structure
7. For adding citations, use the provided script or follow the citationsSchema
8. Refer to existing content in `src/content/docs/` for examples of structure and styling
9. Content schemas are validated at build time - ensure frontmatter matches the appropriate schema