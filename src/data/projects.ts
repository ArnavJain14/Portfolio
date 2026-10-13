export type Project = {
  slug: string;
  title: string;
  period: string;
  category: string;
  tags: string[];
  summary: string;
  // Project-specific testing workflow, shown as a flowchart.
  workflow?: string[];
  // Optional illustration shown on the case-study page.
  cover?: "defect";
  sections: { heading: string; body?: string; points?: string[] }[];
  tools: string[];
};

// The testing lifecycle I follow across projects; activities vary by feature and release.
export const qaWorkflow = [
  "Requirement analysis",
  "Test planning & test case design",
  "UI, API & integration testing",
  "Defect reporting, retesting & regression",
  "UAT & release readiness",
  "Production smoke & validation",
];

// Newest first.
export const projects: Project[] = [
  {
    slug: "b2c-sme-platform-merge",
    title: "B2C-SME Platform Merge",
    period: "Feb 2025 – Apr 2025",
    category: "Integration Testing",
    tags: ["Booking flows", "GST rules", "Stakeholder UAT"],
    summary:
      "Integration testing for merging the consumer and SME booking experiences, including GST rules and fare benefits. I also caught a checkout blocker before it reached customers.",
    workflow: ["Integration scope", "GST scenarios", "Booking E2E", "Defect retest", "Stakeholder UAT"],
    cover: "defect",
    tools: ["Jira", "Integration testing", "Regression", "UAT"],
    sections: [
      {
        heading: "The project",
        body: "Yatra merged its consumer (B2C) and SME booking experiences into one platform, so that SME customers could get GST-linked fare benefits while booking through the main site.",
      },
      {
        heading: "What I did",
        points: [
          "Validated end-to-end booking flows in both B2C and SME contexts, focusing on tenant-specific behaviour, GST rules and a consistent customer journey.",
          "Designed positive, negative and regression scenarios for fare display, booking progression and the integration touchpoints between the two platforms.",
          "Met Business and Product stakeholders daily to clarify acceptance criteria, raise release risks and keep testing priorities in line with delivery milestones.",
        ],
      },
      {
        heading: "The checkout blocker",
        body: "During testing I found that making GST details mandatory in the B2C-SME flow stopped users from completing checkout.",
        points: [
          "Reproduced and confirmed the defect across the affected workflow.",
          "Worked with the Product Manager to size the business impact and set the fix's priority.",
          "Supported the decision to hold the release instead of shipping a checkout blocker, and coordinated the plan with the cross-functional team.",
        ],
      },
      {
        heading: "Result",
        body: "After the fix I re-tested the full booking and checkout flow. It went out in the next deployment cycle with no customer-facing checkout failures.",
      },
    ],
  },
  {
    slug: "homepage-redesign",
    title: "Homepage Redesign",
    period: "May 2024 – Sep 2024",
    category: "Regression Testing",
    tags: ["Sprint test plans", "Cross-browser", "Jira"],
    summary:
      "Planned and ran sprint-by-sprint testing for a refreshed Yatra homepage built to improve browsing and support engagement goals.",
    workflow: ["Requirements", "Sprint test plan", "UI & function", "Regression", "Release ready"],
    tools: ["Jira", "Regression testing", "Cross-browser testing", "Agile"],
    sections: [
      {
        heading: "The project",
        body: "A refreshed Yatra homepage, designed to improve the browsing experience and support traffic and engagement goals. The homepage is where most journeys start, so each release had to leave existing functionality working.",
      },
      {
        heading: "What I did",
        points: [
          "Planned and ran test coverage every sprint for homepage components, interactions and navigation paths, including regression of existing functionality.",
          "Validated UI behaviour and key user journeys across supported browsers and device layouts, and flagged functional and visual issues before release.",
          "Tracked execution progress, defects and retesting in Jira, and gave quality updates for release-readiness discussions.",
        ],
      },
    ],
  },
  {
    slug: "search-results-page-redesign",
    title: "New Search Results Page",
    period: "Oct 2023 – Jan 2024",
    category: "UI & Cross-browser Testing",
    tags: ["Flight search", "Responsive", "Agile"],
    summary:
      "Validated a redesigned flight search results page across browsers and devices, with a focus on usability and a consistent booking journey.",
    workflow: ["Design review", "Test cases", "Browser & UI", "Bug reporting", "Regression"],
    tools: ["Jira", "Cross-browser testing", "Responsive testing", "Agile"],
    sections: [
      {
        heading: "The project",
        body: "A redesign of the flight search results page (SRP), where customers compare and pick their flights. It sits between searching and booking, so problems here cost bookings directly.",
      },
      {
        heading: "What I did",
        points: [
          "Worked with Product, Design and Engineering during Agile sprints to review requirements and validate the redesigned results pages.",
          "Ran functional, UI, responsive and cross-browser checks to find layout inconsistencies, usability gaps and regressions across devices.",
          "Reported defects with steps to reproduce and supporting evidence, then verified the fixes so flight discovery stayed consistent.",
        ],
      },
    ],
  },
  {
    slug: "yatra-prime-subscription",
    title: "Yatra Prime Subscription",
    period: "Jan 2023 – May 2023",
    category: "New Product",
    tags: ["Postman", "Jenkins", "Jira"],
    summary:
      "Owned QA for Yatra's first subscription product, a new revenue stream offering fare-based benefits to customers, through to an on-time launch.",
    workflow: ["Requirements", "Test planning", "UI & API tests", "Defect tracking", "Release checks"],
    tools: ["Postman", "Jenkins", "Jira"],
    sections: [
      {
        heading: "The project",
        body: "Yatra Prime was Yatra's first subscription plan: a new customer-facing product and a new revenue stream offering fare-based benefits. Because it was a new kind of product for the company, the test approach had to be built from scratch.",
      },
      {
        heading: "What I did",
        points: [
          "Owned QA end to end, turning product requirements and sprint goals into test scenarios, test cases and release validation coverage.",
          "Defined the test scope with Product and Engineering.",
          "Validated subscription journeys and the API workflows behind them in Postman, focusing on functional behaviour and integration reliability.",
          "Used Jira to manage testing tasks, keep story-to-defect traceability and coordinate fixes, and worked with Jenkins as part of the delivery workflow.",
        ],
      },
      {
        heading: "Result",
        body: "The plan launched on time.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
