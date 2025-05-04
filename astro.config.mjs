import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';
import { sidebar } from './src/content/sidebar';

export default defineConfig({
  integrations: [
    starlight({
      title: 'DOCS',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FTG-003' }],
      customCss: [
        './src/styles/global.css',
      ],
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      sidebar,
      markdown: {
        headingLinks: true, // ✅ Ora solo headingLinks o future simple options
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
      ],
    }),
    markdoc(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
