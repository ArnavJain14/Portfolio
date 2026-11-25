// All personal content lives here. Edit this file to update the site.

export const profile = {
  name: "Arnav Jain",
  initials: "AJ",
  roles: ["QA Engineer", "End-to-End & Integration Testing", "Test Planning & Defect Management"],
  location: "Gurugram, Haryana, India",
  email: "jainarnav561@gmail.com",
  phone: "+91 99963 39028",
  phoneHref: "+919996339028",
  linkedin: "https://www.linkedin.com/in/arnav-jain-06764b19b",
  // Put your resume PDF in /public with this exact file name.
  resume: "/Arnav_Jain_QA_Resume.pdf",
  available: true,
  about: [
    "QA Engineer with 4 years of hands-on experience owning the full QA life cycle for business-critical, customer-facing transactional applications. I design test plans and test cases from requirements, run functional, regression, integration and end-to-end testing across web and mobile, and drive defects to closure with developers, product owners and business stakeholders.",
    "I'm comfortable triaging issues under tight release timelines in a fast-paced Agile environment, and communicating build quality and release readiness clearly. I work hands-on with API testing in Postman, SQL data validation and Playwright automation (JavaScript, Page Object Model).",
  ],
};

export type Job = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Yatra Online Ltd.",
    role: "QA Engineer",
    type: "Full time",
    location: "Gurugram",
    period: "Sep 2022 – Present",
    points: [
      "Own QA for end-to-end customer-facing booking flows (search, selection, booking, checkout, payment, post-booking), validating releases across web and mobile before go-live.",
      "Design test plans, scenarios and test cases from business and functional requirements with traceability, and run functional, regression, smoke, sanity, integration, system and performance testing to keep releases stable.",
      "Run integration and end-to-end testing across multiple connected systems, validating REST APIs in Postman (payloads, status codes, authentication, error handling) and cross-checking booking and payment data with SQL so the front end and database stay consistent.",
      "Identify, triage and escalate high-severity defects and build quality issues with developers and product owners through Jira dashboards, and retest each one until it's closed.",
      "Partner with Product, Engineering and business stakeholders on UAT and release validation so critical journeys work before deployment, and report test status and release readiness.",
      "Audit web accessibility against WCAG guidelines and work with developers to close the gaps.",
      "Take part in sprint planning, backlog grooming, stand-ups and retrospectives, and help shape scope and acceptance criteria with Product.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Testing & QA Process",
    items: [
      "Test plans",
      "Test case design",
      "Requirement traceability",
      "Functional",
      "Regression",
      "Smoke & sanity",
      "Integration",
      "System",
      "End-to-end",
      "UAT",
      "Performance",
      "Exploratory",
      "Accessibility (WCAG)",
      "Release validation",
      "Defect lifecycle",
      "STLC / SDLC",
    ],
  },
  {
    group: "API & Database",
    items: [
      "Postman",
      "REST APIs",
      "GET / POST / PUT / DELETE",
      "Status codes",
      "Auth testing",
      "Error handling",
      "SQL",
      "MongoDB",
      "MariaDB",
      "Data validation",
    ],
  },
  {
    group: "Automation",
    items: ["Playwright", "JavaScript", "Page Object Model"],
  },
  {
    group: "Tools & Ways of Working",
    items: ["Jira", "Jenkins", "Docker", "Excel", "Agile / Scrum"],
  },
];

export const education = [
  {
    school: "Chitkara University, Rajpura",
    degree: "B.E. in Electronics and Computer Science",
    detail: "GPA 8.46 / 10",
    period: "Aug 2018 – Jul 2022",
  },
];

export const certifications: { name: string; issuer: string; date?: string }[] = [
  { name: "Six Sigma Green Belt & Generative AI", issuer: "IIPCL", date: "May 2025" },
  { name: "Product Management with Gen and Agentic AI", issuer: "BITSoM CEPD" },
  { name: "XPath Locators for Selenium", issuer: "Udemy", date: "Nov 2023" },
  { name: "Microsoft Excel: Beginner to Advanced", issuer: "Udemy", date: "Apr 2023" },
  { name: "The Complete SQL Bootcamp: Zero to Hero", issuer: "Udemy", date: "Dec 2022" },
];
