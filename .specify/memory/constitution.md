<!-- Sync Impact Report:
Version change: 0.1.0 -> 0.1.1
Modified principles: N/A
Added sections: N/A
Removed sections: N/A
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .specify/templates/commands/sp.adr.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.constitution.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.clarify.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.checklist.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.analyze.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.implement.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.git.commit_pr.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.plan.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.phr.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.specify.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.tasks.md: ⚠ pending (file not found)
- README.md: ✅ updated
Follow-up TODOs: N/A
-->
**Project:**
AI/Spec-Driven Book Creation — Build a complete book using **Docusaurus**, maintained with **Spec-Kit Plus**, written through **Claude Code**, and deployed to **GitHub Pages**.
Book Theme: **Physical AI & Humanoid Robotics**

---

## Core Principles

1. **Spec-Driven Development**
   - Content production follows the Spec-Kit Plus workflow (constitution → specification → tasks → implementation).
   - Every chapter must originate from a clear structured spec.

2. **Technical Clarity**
   - Writing must be accessible to readers with basic/intermediate knowledge of AI, robotics, and software engineering.
   - Complex topics require diagrams, examples, or analogies.

3. **Accuracy & Source Integrity**
   - All technical claims must be verifiable from reputable sources (research papers, robotics docs, books, expert articles).
   - No hallucinated facts.

4. **Modularity & Reusability**
   - Each chapter should function as an independent module in Docusaurus.
   - Code snippets must be functional and consistent.

5. **AI-Collaborative Writing**
   - Use Claude Code and tools to automate: content generation, structure enforcement, reference formatting, index building, and glossary creation.

- Spec-driven development: Every feature, chapter, and design decision must be derived from an approved Spec-Kit Plus specification
- AI-assisted but human-led: Claude Code is used for rapid drafting and code generation; all output must be reviewed, edited, and approved by the human author
- Openness and accessibility: The complete source is public, free to read, and mobile-friendly
- Incremental delivery: Each chapter/spec pair is written, tested, and deployed before moving to the next

---

## Key Standards

- **Sources**
  - Minimum **40% peer-reviewed research** (IEEE, ACM, journals, robotics conferences).
  - Remaining: books, robotics technical docs, verified engineering sources.

- **Citation Style:**
  - **APA 7** for text and references.
  - Auto-generated bibliography preferred.

- **Markdown Quality Requirements:**
  - Docusaurus-compatible MDX.
  - Proper heading structure: `#`, `##`, `###`.
  - Internal links must be valid.

- **Depth Levels:**
  - Basic introduction
  - Engineering details
  - Hands-on examples

- **Code & Diagrams:**
  - Code blocks must be runnable.
  - Use Mermaid for diagrams or attach static images.

- **Writing Style:**
  - Professional, clear, slightly conversational.
  - Avoid heavy academic jargon.

- All specifications written in Spec-Kit Plus markdown format
- Book written entirely in Markdown (.mdx acceptable for Docusaurus features)
- Docusaurus v3+ with the classic preset (or agreed alternative)
- Automatic navigation generated from the `sidebars.js` based on folder structure
- Code snippets must include language tags and be tested where applicable
- Readability target: Flesch-Kincaid Grade Level 8–10
- Commit messages follow Conventional Commits style
- Every chapter has its own `/sp.*` spec file in the same folder

---

## Constraints

- **Total book length:** 20,000–30,000 words
- **Chapters:** 15–20
- **Words per chapter:** 800–1500
- **No hallucinations:** All facts must be checkable.
- **Repository:** Must follow Docusaurus v3 best practices.
- **Deployment:** Must publish to GitHub Pages via CI/CD.
- **Uniformity:** All chapters follow standard template:
  - Introduction
  - Core Concepts
  - Examples
  - Diagrams
  - Summary
  - References
- Only permitted tools: GitHub, Docusaurus, Spec-Kit Plus, Claude Code (or any free Claude tier), standard Node.js/npm ecosystem
- No paid themes, plugins, or external services except GitHub Pages (free)
- Minimum 5 chapters + Introduction + Conclusion/Deployment Guide
- Repository must build and deploy successfully with `npm run build && npm run deploy`
- No unapproved AI-generated content may be merged without human review

---

## Success Criteria

- Live book accessible via a public `https://<username>.github.io/<repo>` URL with zero broken links
- Every implemented feature traces back to an approved Spec-Kit Plus file
- GitHub Actions or local `npm run build` completes without errors
- Mobile-responsive design passes Google Lighthouse accessibility score ≥ 90
- Repository contains a clear README with one-click deployment instructions
- Final project passes manual review for adherence to this constitution

### Content Success
- All claims traceable to reputable sources.
- Zero plagiarism.
- Clear reading flow across all chapters.
- Includes diagrams, examples, and real implementations.

### Technical Success
- Docusaurus builds with no errors.
- GitHub Pages deployment succeeds.
- Sidebar, search, and navigation work.

### Spec-Kit Plus Compliance
- Constitution → Spec → Task → Implementation process followed strictly.
- Each chapter created via `/sp.spec` and `/sp.task`.
- Claude Code used for drafts, improvements, and automation.

### Reader Success
- Reader achieves a strong understanding of **Physical AI**, **Humanoid Robotics**, and **AI-Native engineering workflows**.
- Book usable for teaching, training, or self-study.

---

## Governance

- **Amendment Procedure:** Any proposed changes to this constitution must be documented, reviewed, and approved by the human author. A new version must be ratified following semantic versioning.
- **Versioning Policy:** The constitution version will follow semantic versioning (MAJOR.MINOR.PATCH).
  -   MAJOR: Backward incompatible governance/principle removals or redefinitions.
  -   MINOR: New principle/section added or materially expanded guidance.
  -   PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
- **Compliance Review:** All development activities, including code reviews and feature implementations, must explicitly verify compliance with the principles and standards outlined herein.

**Version**: 0.1.1 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-05
