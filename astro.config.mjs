// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'DOCS',
      customCss: ['./src/styles/global.css'],
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true
      },
      sidebar: [
        {
          label: 'Welcome, World!',
          items: [
            { label: 'Why Pyragogy', slug: 'core/why' },
            { label: 'Background', slug: 'core/background' },
            { label: 'Existing AI Models in Education', slug: 'core/models' },


            { label: 'Manifesto', slug: 'core/manifesto' },
            { label: 'Core Principles', slug: 'core/principi' },
          ]
        },
        {
          label: 'Projects',
          items: [
            {
              label: 'Peeragogy Handbook AI',
              items: [
                { label: 'Vision', slug: 'projects/pyria' },
                { label: 'Analysis and Plan', slug: 'projects/village' },
              ],
            },
            { 
              label: 'PeeragogyBot', 
              slug: 'projects/peeragogy_bot' 
            },
          ]
        },
        {
          label: 'Get Involved',
          items: [
            { label: 'Join the Crew', slug: 'core/join' },
          ]
        }
      ]
    }),
    markdoc(),
    mdx() 
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
