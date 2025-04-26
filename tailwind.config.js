// tailwind.config.ts

import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,css}'],
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#e0f2fe',
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
        },
        text: {
          light: '#0f172a',
          dark: '#e2e8f0',
        },
      },
      borderRadius: {
        'xl': '0.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};

export default config;
