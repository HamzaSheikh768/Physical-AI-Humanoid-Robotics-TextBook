import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  bookSidebar: [
    "introduction",
    {
      type: "category",
      label: "Module Overviews",
      link: { type: "doc", id: "module-overviews/index" },
      items: [
        "module-overviews/module1-overview",
        "module-overviews/module2-overview",
        "module-overviews/module3-overview",
        "module-overviews/module4-overview",
      ],
    },
    "weekly-breakdown",
    "learning-outcomes",
    "assessments",
    "hardware-requirements",
    "capstone",
    "conclusion",
  ],
};

export default sidebars;
