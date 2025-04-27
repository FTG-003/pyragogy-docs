// src/content/sidebar.ts

import type { SidebarItem, StarlightUserConfig } from '@astrojs/starlight';

/**
 * Helper function to create a sidebar group easily.
 */
function group(label: string, options: Omit<SidebarItem, 'label'>): SidebarItem {
  return { label, ...options };
}

/**
 * Sidebar structure (without "Start" tab).
 */
export const sidebar = [
  group('Introduction', {
  items: [
    { label: 'Why Pyragogy?', link: 'core/why' },
    { label: 'Background and Vision', link: 'core/background' },
    { label: 'Cognitive Models', link: 'core/models' },
    { label: 'Pyragogy Manifesto', link: 'core/manifesto' },
    { label: 'Foundational Principles', link: 'core/principi' },
  ],
}),
group('Projects', {
  items: [
    group('Peeragogy Handbook AI', {
        collapsed: true,
      items: [
        { label: 'Pyria - AI Peer Companion', link: 'projects/pyria' },
        { label: 'Village - Agent Collaboration', link: 'projects/village' },
      ],
    }),
    { label: 'PeeragogyBot Project', link: 'projects/peeragogy_bot' },
  ],
}),
group('Theories and Experiments', {
  items: [
    { label: 'Cognitive Rhythm Draft', link: 'experiments/applied' },
  ],
}),
group('Get Involved', {
    collapsed: true,
    items: [
    { label: 'Join the Movement', link: 'core/join' },
  ],
}),

] satisfies StarlightUserConfig['sidebar'];
