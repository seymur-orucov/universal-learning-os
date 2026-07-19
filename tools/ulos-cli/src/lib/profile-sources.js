const GLOBAL_COMMAND_SOURCES = [
  "commands/START_LESSON.md",
  "commands/CONTINUE_LESSON.md",
  "commands/PRACTICE.md",
  "commands/REVIEW.md",
  "commands/ASSESS.md",
  "commands/SHOW_PROGRESS.md",
  "commands/SAVE_LESSON.md",
  "commands/SAVE_LESSON_TO_NOTION.md",
];

const GLOBAL_SKILL_SOURCES = [
  "skills/lesson-instructor/SKILL.md",
  "skills/practice-coach/SKILL.md",
  "skills/homework-reviewer/SKILL.md",
  "skills/progress-manager/SKILL.md",
  "skills/assessment-engine/SKILL.md",
  "skills/lesson-summary-builder/SKILL.md",
  "skills/obsidian-lesson-exporter/SKILL.md",
  "skills/notion-lesson-logger/SKILL.md",
];

const STANDARD_COMMAND_OUTPUTS = [
  { outputName: "COMMAND_START_LESSON.md", title: "Start Lesson Command", sources: ["commands/START_LESSON.md"] },
  {
    outputName: "COMMAND_CONTINUE_LESSON.md",
    title: "Lesson Continuation Commands",
    sources: ["commands/CONTINUE_LESSON.md", "commands/SAVE_LESSON.md", "commands/SAVE_LESSON_TO_NOTION.md"],
  },
  { outputName: "COMMAND_PRACTICE.md", title: "Practice Command", sources: ["commands/PRACTICE.md"] },
  { outputName: "COMMAND_REVIEW.md", title: "Review Command", sources: ["commands/REVIEW.md"] },
  { outputName: "COMMAND_ASSESS.md", title: "Assess Command", sources: ["commands/ASSESS.md"] },
  { outputName: "COMMAND_SHOW_PROGRESS.md", title: "Show Progress Command", sources: ["commands/SHOW_PROGRESS.md"] },
];

const STANDARD_SKILL_OUTPUTS = [
  {
    outputName: "SKILL_LESSON_INSTRUCTOR.md",
    title: "Lesson Delivery Skills",
    sources: [
      "skills/lesson-instructor/SKILL.md",
      "skills/lesson-summary-builder/SKILL.md",
      "skills/obsidian-lesson-exporter/SKILL.md",
      "skills/notion-lesson-logger/SKILL.md",
    ],
  },
  { outputName: "SKILL_PRACTICE_COACH.md", title: "Practice Coach Skill", sources: ["skills/practice-coach/SKILL.md"] },
  { outputName: "SKILL_HOMEWORK_REVIEWER.md", title: "Homework Reviewer Skill", sources: ["skills/homework-reviewer/SKILL.md"] },
  { outputName: "SKILL_PROGRESS_MANAGER.md", title: "Progress Manager Skill", sources: ["skills/progress-manager/SKILL.md"] },
];

function getProfileSourceSelections(profile) {
  if (profile === "compact") {
    return { commands: [...GLOBAL_COMMAND_SOURCES], skills: [...GLOBAL_SKILL_SOURCES] };
  }

  if (profile === "standard") {
    return {
      commands: STANDARD_COMMAND_OUTPUTS.map((entry) => ({ ...entry, sources: [...entry.sources] })),
      skills: STANDARD_SKILL_OUTPUTS.map((entry) => ({ ...entry, sources: [...entry.sources] })),
    };
  }

  throw new Error(`Unsupported profile: ${profile}`);
}

module.exports = {
  GLOBAL_COMMAND_SOURCES,
  GLOBAL_SKILL_SOURCES,
  STANDARD_COMMAND_OUTPUTS,
  STANDARD_SKILL_OUTPUTS,
  getProfileSourceSelections,
};
