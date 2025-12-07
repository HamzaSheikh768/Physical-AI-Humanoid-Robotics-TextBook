import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Physical AI & Humanoid Robotics",
  tagline:
    "Building Embodied Intelligence with ROS 2, NVIDIA Isaac, and Vision-Language-Action",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://hamzasheikh768.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/physical-ai-humanoid-robotics-textbook/", 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hamzasheikh768", // Usually your GitHub org/user name.
  projectName: "physical-ai-humanoid-robotics-textbook", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/hamzasheikh768/physical-ai-humanoid-robotics-textbook/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/hamzasheikh768/physical-ai-humanoid-robotics-textbook/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Physical AI & Humanoid Robotics",
      logo: {
        alt: "Physical AI & Humanoid Robotics Logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: '/docs/introduction',
        //   label: 'Introduction',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/module-overviews/ros2', // Example for a module overview
        //   label: 'Modules',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/weekly-breakdown',
        //   label: 'Weekly Breakdown',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/learning-outcomes',
        //   label: 'Learning Outcomes',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/assessments',
        //   label: 'Assessments',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/hardware-requirements',
        //   label: 'Hardware',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/capstone',
        //   label: 'Capstone',
        //   position: 'left',
        // },
        // {
        //   to: '/docs/conclusion',
        //   label: 'Conclusion',
        //   position: 'left',
        // },
        { to: "/docs/introduction", label: "Book", position: "left" },
        {
          href: "https://github.com/hamzasheikh768/physical-ai-humanoid-robotics-textbook/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Module Overviews",
              to: "/docs/module-overviews/ros2",
            },
            {
              label: "Weekly Breakdown",
              to: "/docs/weekly-breakdown",
            },
            {
              label: "Learning Outcomes",
              to: "/docs/learning-outcomes",
            },
            {
              label: "Assessments",
              to: "/docs/assessments",
            },
            {
              label: "Hardware Requirements",
              to: "/docs/hardware-requirements",
            },
            {
              label: "Capstone",
              to: "/docs/capstone",
            },
            {
              label: "Conclusion",
              to: "/docs/conclusion",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hamzasheikh768/physical-ai-humanoid-robotics-textbook/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
