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
      { text: 'Question', link: 'question' },
    ],

    sidebar: [
      {
        text: 'Data Structure',
        items: [
          { text: 'M1 Unit 01', link: '/ds/modules/module-1/unit-1' },
          { text: 'M1 Unit 02', link: '/ds/modules/module-1/unit-2' },
          { text: 'Module 02', link: '/ds/modules/module-2/module-2' },
          { text: 'Module 03', link: '/ds/modules/module-3/module-3' },
          { text: 'Module 04', link: '/ds/modules/module-4/module-4' },
          { text: 'Module 05', link: '/ds/modules/module-5/module-5' },
        ],
      },
      {
        text: 'Data Structure Lab',
        items: [
          { text: 'Experiment 01', link: '/dslab/exp-1' },
          { text: 'Experiment 02', link: '/dslab/exp-2' },
          { text: 'Experiment 03', link: '/dslab/exp-3' },
          { text: 'Experiment 04', link: '/dslab/exp-4' },
          { text: 'Experiment 05', link: '/dslab/exp-5' },
          { text: 'Experiment 06', link: '/dslab/exp-6' },
          { text: 'Experiment 07', link: '/dslab/exp-7' },
          { text: 'Experiment 08', link: '/dslab/exp-8' },
          { text: 'Experiment 09', link: '/dslab/exp-9' },
          { text: 'Experiment 10', link: '/dslab/exp-10' },
        ],
      },
    ],
     footer: {
  message: 'Released under the MIT License.',
  copyright:
    'Copyright © 2026 <a href="https://kuntalojha.github.io/MRKUNTALOJHA/" target="_blank">Kuntal Ojha</a>'
},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kuntalojha' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mrkuntalojha/' },
      { icon: 'twitter', link: 'https://x.com/kuntalojha' },
      { icon: 'youtube', link: 'https://www.youtube.com/@kuntalojhadev' },
      //{ icon: 'youtube', link: 'https://www.youtube.com/@kuntalojha' },
    ],
  },
});
