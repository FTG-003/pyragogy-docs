import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import { sidebar } from './src/content/sidebar';
import sitemap from '@astrojs/sitemap'; // Sitemap plugin

export default defineConfig({
  site: 'https://pyragogy.org', // Dominio principale per sitemap e link assoluti
  integrations: [
    partytown(),
    starlight({
      title: 'DOCS',
      social: [
        { icon: 'comment-alt', label: 'Forum', href: 'https://village.pyragogy.org/' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/FTG-003' },
        { icon: 'rss', label: 'Blog', href: 'https://pyragogy.org/about/' },
        { icon: 'open-book', label: 'La Nostra App', href: 'https://library.pyragogy.org' },
      ],
      customCss: ['./src/styles/global.css'],
      logo: { src: './src/assets/logo.svg', replacesTitle: true },
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
        {
          tag: 'script',
          attrs: {
            type: 'text/partytown',
            defer: true,
            src: 'https://plausible.pyragogy.org/script.js',
            'data-website-id': 'd90d3e11-0645-4066-b381-522a83989d75',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://any.pyragogy.org/embed/anythingllm-chat-widget.min.js',
            defer: true,
            'data-embed-id': '38e1bef4-6f2a-42ff-8003-36585a33c384',
            'data-base-api-url': 'https://any.pyragogy.org/api/embed',
            'data-assistant-name': 'Pyria, the Co-Learning Agent',
            'data-brand-image-url': 'https://raw.githubusercontent.com/FTG-003/yukina/refs/heads/main/public/logo.png',
            'data-temperature': '0.5',
            'data-greeting': 'Hello there! I\'m Pyria, your AI co-learning agent from the Pyragogy AI Village. What would you like to explore or learn about today?',
            'data-default-messages': 'What is Pyragogy?, How does collective learning work?, Can we co-design a learning activity?, What are the principles of UDL?',
            'data-chat-icon': 'chatBubble',
            'data-send-message-text': 'Type your question here...',
            'data-button-color': '#6c5ce7',
            'data-button-text-color': '#1e1f1ff',
            'data-user-bg-color': '#23262f',
            'data-user-text-color': '#101115f',
            'data-assistant-bg-color': '#dfe6e9',
            'data-bot-text-color': '#2d3436',
            'data-main-color': '#1a1c21',
            'data-open-on-load': 'off',
            'data-show-thoughts': 'off',
            'data-support-email': 'info@pyragogy.org',
            'data-no-sponsor': 'false',
            'data-no-header': '',
          },
        },
      ],
    }),
    markdoc(),
    sitemap(), // Genera automaticamente sitemap.xml
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
