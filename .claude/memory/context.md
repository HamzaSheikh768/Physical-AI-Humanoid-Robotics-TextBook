# Physical AI & Humanoid Robotics Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-07

## Active Technologies

- Docusaurus framework for documentation generation
- Markdown/MDX format for content creation
- GitHub Pages for deployment
- Node.js/npm for build process
- Simulation environments: Gazebo and Unity
- ROS 2 (Robot Operating System 2) for robotics systems
- Python for ROS 2 development

## Project Structure

```text
docs/
├── module-overviews/
│   ├── module1-overview.mdx    # Module 1 overview (The Robotic Nervous System)
│   ├── module2-overview.mdx    # Module 2 overview (The Digital Twin)
│   ├── module3-overview.mdx    # Module 3 overview (Physical AI)
│   └── module4-overview.mdx    # Module 4 overview (Humanoid Robotics)
├── modules/
│   ├── module1/
│   │   ├── chapter1.mdx        # From Digital AI to Physical Robots
│   │   ├── chapter2.mdx        # ROS 2 Architecture Deep Dive
│   │   ├── chapter3.mdx        # Core Communication Primitives
│   │   ├── chapter4.mdx        # Building Real Robots in Python
│   │   └── chapter5.mdx        # URDF & Xacro
│   ├── module2/
│   │   ├── chapter1.mdx        # Why Simulation is the Heart of Modern Robotics
│   │   ├── chapter2.mdx        # Gazebo – Physics, Sensors, Plugins, and World Building
│   │   ├── chapter3.mdx        # From Classic to Ignition – The Evolution of Gazebo
│   │   ├── chapter4.mdx        # Unity for Humanoids – High-Fidelity Visualization & Digital Humans
│   │   └── chapter5.mdx        # Bridging Gazebo ↔ Unity ↔ ROS 2
│   ├── module3/                # Module 3 content (to be implemented)
│   └── module4/                # Module 4 content (to be implemented)
└── sidebar.ts                 # Navigation configuration

specs/001-ai-robotics-book/
├── spec.md                    # Feature specification
├── plan.md                    # Implementation plan
├── research.md                # Research findings
├── data-model.md              # Data model
├── quickstart.md              # Quickstart guide
├── contracts/                 # API contracts
└── tasks.md                   # Implementation tasks

docusaurus.config.ts            # Docusaurus site configuration
sidebars.ts                    # Navigation sidebar structure
package.json                   # Project dependencies and scripts
```

## Commands

- `npm start` - Start Docusaurus development server
- `npm run build` - Build the documentation site
- `npm run serve` - Serve the built site locally
- `npm run deploy` - Deploy to GitHub Pages

## Code Style

- MDX format: Follow Docusaurus MDX conventions
- Frontmatter: Include title, description (150-300 chars), tags, sidebar_label, slug
- Headings: Use proper hierarchy (#, ##, ###)
- Code blocks: Include language tags and be runnable where applicable
- Word count: Each chapter must be 1700-2000 words
- Academic level: University-grade content with technical accuracy
- Citations: Use APA 7 format for references

## Recent Changes

- Feature 001-ai-robotics-book: Created comprehensive course content structure for Physical AI & Humanoid Robotics course with 4 modules × 5 chapters each in Docusaurus-ready MDX format
- Module 1: The Robotic Nervous System (ROS 2) content structure with 5 chapters covering ROS 2 fundamentals
- Module 2: The Digital Twin (Simulation Environments) content structure with 5 chapters covering Gazebo, Unity, and integration concepts

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->