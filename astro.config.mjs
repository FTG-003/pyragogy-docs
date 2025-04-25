// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Pyragogy',
    customCss: ['./src/styles/castom.css'],
    logo: {
      src: './src/assets/logo.svg',
      replacesTitle: true
    },
    sidebar: [
      {
        label: 'Welcome, World!',
        items: [
          { label: 'Why Pyragogy', slug: 'core/why-pyragogy' },
          { label: 'Manifesto', slug: 'core/manifesto' },
          { label: 'Core Principles', slug: 'core/principi' },   
        ]
      },
      {
        label: 'Projects',
        items: [
          { label: 'PeeragogyBot', slug: 'projects/peeragogy_bot' },
          { label: 'OpenAI assistent', slug: 'projects/pyria' },
        ]
      },
      {
        label: 'Join the crew',
        items: [
        { label: 'Join the Crew', slug: 'core/join' },
        ]
      }
    ]
  }), markdoc()]
});