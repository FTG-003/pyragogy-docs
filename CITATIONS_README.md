# Pyragogy Citations System

This document explains how to use and maintain the citations system for the Pyragogy project.

## Overview

The citations system showcases academic recognition and mentions of Pyragogy in scientific literature and public discourse. It consists of:

- **Content Collection**: Structured data for citations
- **CitationCard Component**: Individual citation display
- **Citations Page**: Main page showing all citations
- **RandomCitation Component**: For displaying random citations elsewhere
- **CitationStats Component**: Statistics display

## File Structure

```
src/
├── content/
│   ├── citations/           # Citation data files
│   │   ├── peer-learning-education-4-0.md
│   │   ├── cognitive-rhythm-theory.md
│   │   └── ai-enhanced-peeragogy.md
│   └── docs/
│       └── citations.mdx    # Main citations page
├── components/
│   ├── CitationCard.astro   # Individual citation card
│   ├── RandomCitation.astro # Random citation display
│   └── CitationStats.astro  # Statistics component
└── content/
    └── config.ts           # Content collection schema
```

## Adding New Citations

### 1. Create a new citation file

Create a new `.md` file in `src/content/citations/` with the following frontmatter:

```yaml
---
title: "Your Citation Title"
quote: "The actual quote from the source"
authors: ["Author 1", "Author 2", "Author 3"]
source: "Journal or Publication Name"
doi: "10.1000/example.2024.001"  # Optional
url: "https://example.com/paper"  # Optional (if no DOI)
tags: ["Tag 1", "Tag 2", "Tag 3"]
year: 2024
publicationType: "journal"  # journal, conference, book, report, blog, news
verified: true  # Set to true if DOI is verified
---

Optional description or notes about the citation.
```

### 2. Required Fields

- `title`: The title of the citation
- `quote`: The main excerpt/quote from the source
- `authors`: Array of author names
- `source`: Journal, conference, or publication name
- `tags`: Array of relevant tags
- `verified`: Boolean indicating if the citation is verified

### 3. Optional Fields

- `doi`: Digital Object Identifier (preferred over URL)
- `url`: Direct link to the publication
- `year`: Publication year
- `publicationType`: Type of publication

## Using Components

### CitationCard Component

```astro
---
import CitationCard from '../components/CitationCard.astro';
---

<CitationCard
  title="Citation Title"
  quote="The quote text"
  authors={["Author 1", "Author 2"]}
  source="Journal Name"
  doi="10.1000/example.2024.001"
  tags={["Tag 1", "Tag 2"]}
  year={2024}
  publicationType="journal"
  verified={true}
/>
```

### RandomCitation Component

Display a random citation anywhere on your site:

```astro
---
import RandomCitation from '../components/RandomCitation.astro';
---

<RandomCitation />
```

### CitationStats Component

Display citation statistics:

```astro
---
import CitationStats from '../components/CitationStats.astro';
---

<CitationStats />
```

## Styling

All components use Starlight's CSS custom properties for consistent theming:

- `--sl-color-accent`: Primary accent color
- `--sl-color-text`: Text color
- `--sl-color-gray-*`: Gray scale colors
- `--sl-shadow-*`: Shadow variables

Components automatically support:
- Dark mode
- Responsive design
- Hover effects
- Accessibility features

## Content Collection Schema

The citations collection is defined in `src/content/config.ts`:

```typescript
const citationsSchema = z.object({
  title: z.string(),
  quote: z.string(),
  authors: z.array(z.string()),
  source: z.string(),
  doi: z.string().optional(),
  url: z.string().url().optional(),
  tags: z.array(z.string()),
  year: z.number().optional(),
  publicationType: z.enum(['journal', 'conference', 'book', 'report', 'blog', 'news']).optional(),
  verified: z.boolean().default(false),
});
```

## Best Practices

1. **Verification**: Always verify DOIs and URLs before adding citations
2. **Tags**: Use consistent, descriptive tags for better categorization
3. **Quotes**: Keep quotes concise but meaningful (under 300 characters recommended)
4. **Authors**: Use full names with titles (Dr., Prof., etc.) when available
5. **Sources**: Use the official journal/conference name

## Maintenance

- Regularly update citations with new academic mentions
- Verify existing DOIs and URLs periodically
- Review and update tags for consistency
- Archive outdated or retracted citations

## Integration

The citations system is integrated into the main navigation via the sidebar. The main page is accessible at `/citations` and shows:

- Statistics overview
- All citations in a responsive grid
- Filtering by tags (future enhancement)
- Search functionality (future enhancement)

## Future Enhancements

- Tag-based filtering
- Search functionality
- Citation export (BibTeX, APA, etc.)
- Citation impact metrics
- Integration with academic databases 

# 🚀 Ottimizzazioni Pagina Citations - Pyragogy Docs

## 📋 Panoramica delle Ottimizzazioni

La pagina Citations è stata completamente ottimizzata per **performance**, **SEO**, **accessibilità** e **user experience**. Ecco un riepilogo delle migliorie implementate:

## 🎯 Ottimizzazioni SEO

### ✅ Metadati Completati
- **Title tag ottimizzato**: "Citations & Academic References | Pyragogy"
- **Meta description** dettagliata e keyword-rich
- **Open Graph tags** per social media sharing
- **Twitter Card** per condivisioni Twitter
- **Canonical URL** per evitare contenuti duplicati
- **JSON-LD structured data** per rich snippets

### ✅ Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ScholarlyArticle",
        "name": "Citation Title",
        "author": [...],
        "datePublished": "2024",
        "publisher": {...}
      }
    ]
  }
}
```

## ⚡ Ottimizzazioni Performance

### ✅ Lazy Loading
- **Intersection Observer** per caricamento differito delle card
- **Preload** di risorse critiche (font, DNS prefetch)
- **Containment CSS** per isolamento del layout
- **GPU acceleration** con `transform: translateZ(0)`

### ✅ JavaScript Ottimizzato
- **Debounced scroll events** per performance
- **Throttled filter operations**
- **Performance monitoring** con Web Performance API
- **Event delegation** per gestione efficiente degli eventi

### ✅ CSS Performance
```css
.citation-card {
  will-change: transform;
  contain: layout style paint;
  transform: translateZ(0); /* GPU acceleration */
}
```

## ♿ Ottimizzazioni Accessibilità

### ✅ ARIA Labels e Roles
- `aria-labelledby` per sezioni
- `aria-live="polite"` per aggiornamenti dinamici
- `aria-pressed` per bottoni toggle
- `role="list"` e `role="listitem"` per struttura semantica

### ✅ Keyboard Navigation
- **Focus management** con `:focus-visible`
- **Keyboard shortcuts** per filtri
- **Skip links** per screen readers

### ✅ Screen Reader Support
- **Announcements** per cambi di filtro
- **Visually hidden** headings per struttura
- **Alt text** per immagini e icone

## 🎨 Componenti Ottimizzati

### ✅ CitationStats Component
- **Reusable** e **modular**
- **Accessibility-first** design
- **Responsive** grid layout
- **Performance optimized** con CSS containment

### ✅ CitationCard Component
- **Lazy loading** con Intersection Observer
- **Loading states** con skeleton animation
- **Touch-friendly** interactions
- **Reduced motion** support

## 📱 Responsive Design

### ✅ Mobile-First Approach
```css
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
```

### ✅ Touch Optimizations
- **Touch targets** di almeno 44px
- **Active states** per dispositivi touch
- **Swipe gestures** support (future enhancement)

## 🔧 Strumenti di Sviluppo

### ✅ Performance Utilities
```typescript
// src/utils/performance.ts
export function debounce<T>(func: T, wait: number)
export function throttle<T>(func: T, limit: number)
export const lazyLoadOptions = { rootMargin: '50px', threshold: 0.1 }
```

### ✅ Monitoring
- **Performance marks** per misurazione
- **Console logging** per debugging
- **Error boundaries** (future enhancement)

## 📊 Metriche di Performance

### ✅ Target Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### ✅ Lighthouse Score Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 🚀 Prossimi Passi

### 🔮 Future Enhancements
1. **Service Worker** per caching offline
2. **Virtual scrolling** per grandi dataset
3. **Search functionality** con debouncing
4. **Export citations** in formato BibTeX
5. **Analytics tracking** per user behavior

### 🔧 Maintenance
1. **Regular performance audits** con Lighthouse
2. **Accessibility testing** con screen readers
3. **Cross-browser testing** su dispositivi reali
4. **Performance monitoring** in produzione

## 📝 Note per Sviluppatori

### ✅ Best Practices Implementate
- **Semantic HTML** per SEO e accessibilità
- **CSS containment** per performance
- **Progressive enhancement** per compatibilità
- **Error handling** per robustezza

### ✅ Code Quality
- **TypeScript** per type safety
- **ESLint** per code consistency
- **Prettier** per formatting
- **Component modularity** per maintainability

---

**Ultimo aggiornamento**: Gennaio 2025  
**Versione**: 1.0.0  
**Autore**: Pyragogy Team 