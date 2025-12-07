# Data Model: Physical AI & Humanoid Robotics Course Content

## Entities

### Module
- **Name**: Module
- **Description**: A top-level organizational unit of the course.
- **Fields**:
    - `title` (string): The title of the module (e.g., "The Robotic Nervous System (ROS 2)").
    - `description` (string): Brief overview of the module's content and objectives.
    - `chapters` (list of Chapter objects): A list containing exactly 5 Chapter objects.
    - `overview_content` (string): Detailed overview content for the module page.
    - `learning_objectives` (list of strings): List of learning objectives for the module.
- **Relationships**:
    - Contains 5 `Chapter` entities.
- **Validation Rules**:
    - Must contain exactly 5 chapters as per FR-002.
    - Title must be 10-100 characters.
    - Description must be 50-300 characters.
    - Must match one of the predefined module structures.

### Chapter
- **Name**: Chapter
- **Description**: A discrete unit of educational content within a module.
- **Fields**:
    - `title` (string): The title of the chapter (e.g., "Why Simulation is the Heart of Modern Robotics").
    - `short_title` (string): Abbreviated title for navigation.
    - `module_id` (string): Reference to parent module.
    - `content` (string): The body of the chapter, formatted in Docusaurus-ready MDX.
    - `word_count` (integer): The number of words in the chapter content.
    - `frontmatter` (object): Metadata for Docusaurus integration.
    - `learning_objectives` (list of strings): Specific learning objectives for the chapter.
    - `prerequisites` (list of strings): Knowledge required before reading.
    - `key_concepts` (list of strings): Important concepts covered in the chapter.
    - `examples` (list of objects): Code examples or practical demonstrations.
    - `diagrams` (list of objects): Diagrams or visual aids with descriptions.
- **Relationships**:
    - Belongs to a `Module` entity.
- **Validation Rules**:
    - Must be between 1700–2000 words in length (FR-003).
    - Must adhere to university-grade academic standards (FR-005).
    - Must be delivered in Docusaurus-ready MDX format (FR-004).
    - Must include comprehensive technical explanations, descriptions for diagrams, practical examples, and real-world applications (FR-007).
    - All technical claims, facts, and concepts must be accurate, up-to-date, and verifiable (FR-008).
    - Title must be 10-150 characters.
    - Must have 3-10 key concepts.
    - Must have 1-5 learning objectives.

### Course
- **Name**: Course
- **Description**: The complete Physical AI & Humanoid Robotics course.
- **Fields**:
    - `title` (string): Full course title ("Physical AI & Humanoid Robotics").
    - `modules` (list of Module objects): Collection of all 4 modules.
    - `overview` (string): Course overview content.
    - `target_audience` (string): Description of intended learners.
    - `prerequisites` (list of strings): Required background knowledge.
    - `learning_outcomes` (list of strings): Overall learning outcomes of the course.
- **Relationships**:
    - Contains 4 `Module` entities.
- **Validation Rules**:
    - Title must match "Physical AI & Humanoid Robotics".
    - Must contain exactly 4 modules.
    - Target audience must be university-level students.
    - Prerequisites must include basic programming and robotics knowledge.

## Relationships

- Course 1 --- * Module (Course contains exactly 4 modules)
- Module 1 --- * Chapter (Module contains exactly 5 chapters)

## State Transitions

### Content Creation Workflow
1. **Specification** → **Draft**: Module and chapter structure defined in spec
2. **Draft** → **Content Generation**: MDX content created for each chapter
3. **Content Generation** → **Review**: Content reviewed for accuracy and quality
4. **Review** → **Published**: Content integrated into Docusaurus site

## MDX Format Requirements

### Frontmatter Schema
```
---
title: string (required)
description: string (required, 150-300 chars)
tags: [string] (required, 3-5 tags)
sidebar_label: string (required)
slug: string (required)
authors: [string] (optional)
keywords: [string] (optional, 3-5 keywords)
---
```

### Content Structure
Each chapter must follow this structure:
- Introduction with learning objectives
- Core concepts with technical explanations
- Practical examples and code snippets
- Diagrams and visual aids (Mermaid or static images)
- Summary and key takeaways
- References and further reading

## Validation Functions

### Word Count Validation
```
function validateWordCount(content: string): boolean {
  const wordCount = content.trim().split(/\s+/).length;
  return wordCount >= 1700 && wordCount <= 2000;
}
```

### MDX Syntax Validation
```
function validateMDXSyntax(content: string): boolean {
  // Check for valid MDX syntax (simplified)
  // - Proper heading hierarchy
  // - Valid code block formatting
  // - Correct use of Docusaurus components
  // - Proper link syntax
  return true; // Implementation would use MDX parser
}
```