// src/content/sidebar.ts

import type { SidebarItem, StarlightUserConfig } from '@astrojs/starlight';

/**
 * Helper function to create a sidebar group easily.
 */
function group(label: string, options: Omit<SidebarItem, 'label'>): SidebarItem {
  return { label, ...options };
}

/**
 * Sidebar structure (without \"Start\" tab).
 */
export const sidebar = [
  group('Welcome', {
    items: [
      'core/why',
      'core/background',
      'core/models',
      'core/manifesto',
      'core/principi',
    ],
  }),
  group('Projects', {
    items: [
      group('Peeragogy Handbook AI', {
        items: [
          'projects/pyria',
          'projects/village',
        ],
      }),
      'projects/peeragogy_bot',
    ],
  }),
  group('Get Involved', {
    items: [
      'core/join',
    ],
  }),
] satisfies Starl
