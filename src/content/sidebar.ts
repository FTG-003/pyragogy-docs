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
      { label: 'Welcome to Pyragogy', link: 'core/why' },
      { label: 'Background and Vision', link: 'core/background' },
      { label: 'Cognitive Models', link: 'core/models' },
      { label: 'Pyragogy Manifesto', link: 'core/manifesto' },
      { label: 'Foundational Principles', link: 'core/principi' },
    ],
  }),
  group('Research Meets Practice', {
    items: [
      { label: 'Pyragogy Meets FMAL', link: 'projects/pyragogy-fmal' },
    ],
  }),
  group('Open-Source AI', {
    items: [
      group('Peeragogy Handbook AI', {
        collapsed: true,
        items: [
          { label: 'Village - Agent Collaboration', link: 'projects/village' },
        ],
      }),
      { label: 'Peeragogy ChatBot', link: 'projects/peeragogy' },
    ],
  }),
  group('Theories and Experiments', {
    items: [
      { label: 'The Cognitive Rhythm Theory', link: 'experiments/applied' },
    ],
  }),
  group('Get Involved', {
    collapsed: true,
    items: [
      { label: 'Join the Crew & Newsletter', link: 'core/join' },
    ],
  }),
] satisfies StarlightUserConfig['sidebar'];
