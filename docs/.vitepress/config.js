import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Data Structure',
  base: '/DATA-STRUCTURE/',
  description: 'NOTE',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Data Structure', link: 'ds' },
      { text: 'Result', link: 'result' },
    ],

    sidebar: [
      {
        text: 'Data Structure',
        items: [
          { text: 'M1 Unit 01', link: '/ds/modules/module-1/unit-1' },
          { text: 'M1 Unit 02', link: '/ds/modules/module-1/unit-2' },
          { text: 'M2 Unit 01', link: '/ds/modules/module-2/unit-1' },
          { text: 'M2 Unit 02', link: '/ds/modules/module-2/unit-2' },
        ],
      },
      {
        text: 'Data Structure Lab',
        items: [
          { text: 'Experiment 01', link: '/dslab/exp-1.md' },
          { text: 'Experiment 02', link: '/dslab/exp-2.md' },
          { text: 'Experiment 03', link: '/dslab/exp-3.md' },
          // { text: 'Experiment 04', link: '/dslab/exp-4.md' },
          // { text: 'Experiment 05', link: '/dslab/exp-5.md' },
          // { text: 'Experiment 06', link: '/dslab/exp-6.md' },
          // { text: 'Experiment 07', link: '/dslab/exp-7.md' },
          // { text: 'Experiment 08', link: '/dslab/exp-8.md' },
          // { text: 'Experiment 09', link: '/dslab/exp-9.md' },
          // { text: 'Experiment 10', link: '/dslab/exp-10.md' },
          // { text: 'Experiment 11', link: '/dslab/exp-12.md' },
          // { text: 'Experiment 13', link: '/dslab/exp-13.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kuntalojha' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mrkuntalojha/' },
      { icon: 'twitter', link: 'https://x.com/kuntalojha' },
      // { icon: 'youtube', link: 'https://www.youtube.com/@kuntalojha' },
    ],
  },
});
