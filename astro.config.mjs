import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown'; // Importa partytown
import { sidebar } from './src/content/sidebar';

export default defineConfig({
  integrations: [
    partytown(), // Aggiungi partytown alle integrazioni
    starlight({
      title: 'DOCS',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FTG-003' },
               { icon: 'rss', label: 'Blog', href: 'https://pyragogy.org/' },
      ],
      customCss: [
        './src/styles/global.css',
      ],
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      sidebar,
      markdown: {
        headingLinks: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
          },
        },
        { // Script Plausible
          tag: 'script',
          attrs: {
            type: 'text/partytown', // Tipo corretto per Partytown
            defer: true,
            src: 'https://plausible.pyragogy.org/script.js',
            'data-website-id': 'd90d3e11-0645-4066-b381-522a83989d75',
          },
        }
      ],
    }),
    markdoc(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
