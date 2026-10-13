// Work that's still in progress. Move an item to projects.ts once it's finished.

export type WorkbenchItem = {
  title: string;
  status: string;
  summary: string;
  tags: string[];
  // Steps the automation covers today; `done: false` marks what's being built.
  steps: { name: string; done: boolean }[];
  built: string[];
  next: string[];
};

export const workbench: WorkbenchItem[] = [
  {
    title: "Flight Booking Automation",
    status: "In progress",
    summary:
      "Flight booking is the most important journey on the site, and it was checked by hand every regression cycle. I'm automating it with Playwright so a broken step fails a test run before it reaches a customer.",
    tags: ["Playwright", "JavaScript", "Page Object Model"],
    steps: [
      { name: "Search flights", done: true },
      { name: "Select flight", done: true },
      { name: "Booking details", done: true },
      { name: "Reach payment page", done: true },
      { name: "More scenarios", done: false },
      { name: "Regression integration", done: false },
    ],
    built: [
      "A Playwright script in JavaScript that runs search, flight selection and booking through to the payment page.",
      "Page Object Model structure, so each page's locators and actions live in one class and tests read like the user journey.",
      "Assertions at every key step, so a broken page fails at that step and doesn't fail silently later on.",
    ],
    next: [
      "Cover more scenarios beyond the main booking path.",
      "Bring the suite into the regular regression process.",
    ],
  },
];
