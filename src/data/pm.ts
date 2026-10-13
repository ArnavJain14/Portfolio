// Product management coursework and case studies.
// These are self-directed learning projects, not professional PM work.

export const pmCourse = {
  name: "Product Management with Gen and Agentic AI",
  institute: "BITSoM CEPD",
  instituteFull: "BITS School of Management, Centre for Executive and Professional Development",
  topics: [
    "Design thinking",
    "User personas",
    "Prioritisation frameworks",
    "Roadmapping",
    "Prototyping",
    "UI/UX fundamentals",
    "Go-to-market",
    "Agentic AI",
  ],
};

export const pmIntro =
  "Working closely with Product on scope, priorities and release decisions got me interested in product management. I'm building that foundation through a PM programme at BITSoM CEPD, and the case studies below come from that work.";

export type PmProject = {
  title: string;
  kind: string;
  summary: string;
  tags: string[];
};

export const pmProjects: PmProject[] = [
  {
    title: "Google Maps Parking Reservation",
    kind: "Product roadmap case study",
    summary:
      "A 12-week roadmap with bi-weekly releases for a hypothetical parking-reservation feature, including a cross-functional team structure and a North Star metric: reduce parking search time.",
    tags: ["Roadmapping", "North Star metric", "Release planning"],
  },
  {
    title: "SoloSphere TravelPlanner",
    kind: "Lean Canvas",
    summary:
      "Applied the Lean Canvas to a multi-agent AI travel-planning concept, working through the problem statement, value proposition and customer segments.",
    tags: ["Lean Canvas", "Agentic AI", "Customer segments"],
  },
  {
    title: "Core PM Modules",
    kind: "Coursework",
    summary:
      "Modules on design thinking, user personas, prioritisation frameworks, prototyping, UI/UX fundamentals and DevOps considerations for PMs.",
    tags: ["Design thinking", "Personas", "Prototyping"],
  },
  {
    title: "Go-to-Market Strategy",
    kind: "Applied study",
    summary:
      "Practice exercises on go-to-market frameworks: the Five Cs, market segmentation and targeting.",
    tags: ["GTM", "Five Cs", "Segmentation"],
  },
];

export const pmSkills: { group: string; items: string[] }[] = [
  {
    group: "Product fundamentals",
    items: ["Requirements analysis", "User journey mapping", "Problem definition", "PRD review", "Acceptance criteria", "MVP thinking"],
  },
  {
    group: "Prioritisation & strategy",
    items: ["RICE", "MoSCoW", "ICE", "Kano", "Roadmapping", "Lean Canvas", "GTM"],
  },
  {
    group: "AI-assisted work",
    items: ["Agentic AI concepts", "AI-assisted research", "Multi-agent workflow design"],
  },
];
