# Data Model: Physical AI & Humanoid Robotics Course Content Generation

## Entities

### Module
- **Name**: Module
- **Description**: A top-level organizational unit of the course.
- **Fields**:
    - `title` (string): The title of the module (e.g., "The Robotic Nervous System (ROS 2)").
    - `chapters` (list of Chapter objects): A list containing exactly 5 Chapter objects.
- **Relationships**:
    - Contains 5 `Chapter` entities.
- **Validation Rules**:
    - Must contain exactly 5 chapters as per FR-002.

### Chapter
- **Name**: Chapter
- **Description**: A discrete unit of educational content within a module.
- **Fields**:
    - `title` (string): The title of the chapter (e.g., "Why Simulation is the Heart of Modern Robotics").
    - `content` (string): The body of the chapter, formatted in Docusaurus-ready MDX.
    - `word_count` (integer): The number of words in the chapter content.
- **Relationships**:
    - Belongs to a `Module` entity.
- **Validation Rules**:
    - Must be between 1700–2000 words in length (FR-003).
    - Must adhere to university-grade academic standards (FR-005).
    - Must be delivered in Docusaurus-ready MDX format (FR-004).
    - Must include comprehensive technical explanations, descriptions for diagrams, practical examples, and real-world applications (FR-007).
    - All technical claims, facts, and concepts must be accurate, up-to-date, and verifiable (FR-008).