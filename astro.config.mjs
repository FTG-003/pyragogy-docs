import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import { sidebar } from './src/content/sidebar';

export default defineConfig({
  integrations: [
    partytown(),
    starlight({
      title: 'DOCS',
      social: [{ icon: 'comment-alt', label: 'Forum', href: 'https://village.pyragogy.org/' },
               { icon: 'github', label: 'GitHub', href: 'https://github.com/FTG-003' },
               { icon: 'rss', label: 'Blog', href: 'https://pyragogy.org/about/' },
               { icon: 'open-book', label: 'La Nostra App', href: 'https://library.pyragogy.org' },
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
            'data-embed-id': '38e1bef4-6f2a-42ff-8003-36585a33c384',
            'data-base-api-url': 'https://any.pyragogy.org/api/embed',
            'data-assistant-name': 'Pyragogy Assistant',
            'data-title-text':'Pyragogy Assistant',
            'data-default-messages': '"What is Pyragogy?", "How does cognitive rhythm theory work?", "What are the core principles of peer learning?", "How can I implement collaborative learning?", "What is the difference between traditional education and Pyragogy?"',
            'data-temperature': '0.4',
            'data-greeting': 'Hi! I’m the Pyragogy Assistant, how can I help you?',
            'data-placeholder-text': 'Type your question here...',
            'data-send-message-text': 'Send',
            'data-brand-image-url': 'https://raw.githubusercontent.com/FTG-003/yukina/refs/heads/main/public/logo.png',
            'data-avatar-url': 'https://avatars.githubusercontent.com/u/3668236?v=4',
            'data-button-color': '#6c5ce7',
            'data-button-text-color': '#1e1f1ff',
            'data-user-bg-color': '#23262f',
            'data-user-text-color': '',
            'data-bot-bg-color': '#dfe6e9',
            'data-bot-text-color': '#2d3436',
            'data-open-on-load': 'off',
            'data-support-email': 'info@pyragogy.org',
            'data-session-ttl': '300',
            'data-max-questions': '20',
            'data-show-thoughts': 'off',
            'data-no-sponsor': 'off',
            'data-no-header': '',
            defer: true,
          },
        },

      ],
    }),
    markdoc(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
