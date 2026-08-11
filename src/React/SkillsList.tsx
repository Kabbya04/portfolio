import React from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[var(--accent)]"
      >
        <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM5 5V19H19V5H5ZM7 8H17V10H7V8ZM7 12H14V14H7V12Z" />
      </svg>
    ),
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "Dart",
      "C",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[var(--accent-3)]"
      >
        <path d="M12 2L22 7V17L12 22L2 17V7L12 2ZM4 8.3V15.7L12 20L20 15.7V8.3L12 4L4 8.3Z" />
      </svg>
    ),
    items: [
      "Node.js",
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "React Native",
      "Flutter",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[var(--accent-2)]"
      >
        <path d="M12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4Z" />
      </svg>
    ),
    items: [
      "Generative AI",
      "Large Language Models",
      "NLP Fundamentals",
      "Computer Vision",
      "Recommendation Systems",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[var(--accent)]"
      >
        <path d="M7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4C5 2.89543 5.89543 2 7 2ZM7 4V20H17V4H7ZM9 6H15V8H9V6ZM9 10H15V12H9V10Z" />
      </svg>
    ),
    items: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "Firebase",
      "Supabase",
      "VS Code",
      "Cursor",
      "Antigravity Qoder",
    ],
  },
  {
    title: "Soft Skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[var(--accent-3)]"
      >
        <path d="M12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2ZM4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4Z" />
      </svg>
    ),
    items: [
      "Communication",
      "Teamwork & Collaboration",
      "Problem Solving",
      "Time Management",
    ],
  },
];

const SkillsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="card p-4 sm:p-5 flex flex-col gap-3 sm:gap-4 min-w-0"
        >
          <div className="flex items-center gap-3 min-w-0">
            {group.icon}
            <h4 className="text-base sm:text-lg font-semibold break-words">{group.title}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="chip text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
