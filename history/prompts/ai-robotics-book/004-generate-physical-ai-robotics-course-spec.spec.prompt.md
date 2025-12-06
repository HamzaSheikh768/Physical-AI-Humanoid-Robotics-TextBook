---
id: 004
title: Generate Physical AI Robotics Course Spec
stage: spec
date: 2025-12-05
surface: agent
model: claude-opus-4-5-20251101
feature: ai-robotics-book
branch: 001-ai-robotics-book
user: cli_user
command: /sp.specify
labels: ["specification", "course-content", "robotics", "ai"]
links:
  spec: specs/1-ai-robotics-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-ai-robotics-book/spec.md
  - specs/1-ai-robotics-book/checklists/requirements.md
tests:
  - none
---

## Prompt

You are a world-class robotics professor and curriculum designer.

Generate the complete content for all 4 modules of the Physical AI & Humanoid Robotics course in Docusaurus-ready MDX format.

Each module must contain exactly 5 long, high-level, university-grade chapters (1700–2000 words each).

Module structure (follow exactly):

Module 1 – The Robotic Nervous System (ROS 2)
1. From Digital AI to Physical Robots – Why ROS 2 is the Universal Nervous System
2. ROS 2 Architecture Deep Dive – Real-Time, Distributed, Robot-Grade Reliability
3. Core Communication Primitives – Topics, Services, Actions, Parameters
4. Building Real Robots in Python – Packages, Workspaces, Launch, rclpy Mastery
5. URDF & Xacro – Describing Complex Humanoid Bodies

## Response snapshot

Successfully generated the specification for the "Physical AI & Humanoid Robotics Course Content Generation" feature.
Created new branch: `001-ai-robotics-book`.
Specification file created at: `specs/1-ai-robotics-book/spec.md`.
Spec quality checklist created and passed at: `specs/1-ai-robotics-book/checklists/requirements.md`.
The feature is now ready for planning.

## Outcome

- ✅ Impact: Specification for Physical AI & Humanoid Robotics course content generated and validated.
- 🧪 Tests: Spec quality checklist passed.
- 📁 Files: Created `specs/1-ai-robotics-book/spec.md` and `specs/1-ai-robotics-book/checklists/requirements.md`.
- 🔁 Next prompts: Ready for `/sp.plan`.
- 🧠 Reflection: The `create-phr.sh` script was not found, so the PHR was created using the agent-native flow by reading the template and filling placeholders.

## Evaluation notes (flywheel)

- Failure modes observed: Script not found for PHR creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: Investigate the reason for `create-phr.sh` not being found.
