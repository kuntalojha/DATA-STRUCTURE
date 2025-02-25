import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DS & DS LAB',
  description: 'DS & DSA NOTE',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'DATA STRUCTURE LAB',
        items: [
          { text: 'Experiment 01', link: '/DSLAB/experiment-1' },
          { text: 'Experiment 02', link: '/DSLAB/experiment-2' },
          { text: 'Experiment 03', link: '/DSLAB/experiment-3' },
          { text: 'Experiment 04', link: '/DSLAB/experiment-4' },
          { text: 'Experiment 05', link: '/DSLAB/experiment-5' },
          { text: 'Experiment 06', link: '/DSLAB/experiment-6' },
          { text: 'Experiment 07', link: '/DSLAB/experiment-7' },
          { text: 'Experiment 08', link: '/DSLAB/experiment-8' },
          { text: 'Experiment 09', link: '/DSLAB/experiment-9' },
          { text: 'Experiment 10', link: '/DSLAB/experiment-10' },
          { text: 'Experiment 11', link: '/DSLAB/experiment-11' },
          { text: 'Experiment 12', link: '/DSLAB/experiment-12' },
          { text: 'Experiment 13', link: '/DSLAB/experiment-13' },
        ],
      },
      {
        text: 'DATA STRUCTURE',
        items: [
          { text: 'Unit 01', link: '/DS/unit-1' },
          { text: 'Unit 02', link: '/DS/unit-2' },
          { text: 'Unit 03', link: '/DS/unit-3' },
          { text: 'Unit 04', link: '/DS/unit-4' },
          { text: 'Unit 05', link: '/DS/unit-5' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
