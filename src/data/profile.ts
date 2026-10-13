// All personal content lives here. Edit this file to update the site.

export const profile = {
  name: "Arnav Jain",
  initials: "AJ",
  roles: ["QA Engineer", "QA Automation", "API & SQL Testing"],
  location: "Gurugram, Haryana, India",
  email: "jainarnav561@gmail.com",
  phone: "+91 99963 39028",
  phoneHref: "+919996339028",
  linkedin: "https://www.linkedin.com/in/arnav-jain-06764b19b",
  // Put your resume PDF in /public with this exact file name.
  resume: "/Arnav_Jain_QA_Resume.pdf",
  available: true,
  about: [
    "Detail-oriented QA Engineer with 4 years of experience in software testing and quality assurance, specializing in Manual Testing, Functional Testing, Regression Testing, and End-to-End Testing of business-critical booking workflows in the travel domain. Skilled in API Testing using Postman, SQL and Database Testing, and UAT/release validation, with a strong record of requirement analysis, defect lifecycle management using Jira, and collaboration across Agile/Scrum teams.",
    "Hands-on experience building Playwright automation using JavaScript and Page Object Model to automate the end-to-end flight booking flow through payment. Experienced in working closely with Product Managers, Developers, and Business stakeholders to identify defects, mitigate risk before release, and improve product quality, supported by solid grounding in STLC and SDLC practices.",
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
      "Test web booking applications end to end: search, selection, booking, checkout, payment and post-booking.",
      "Write test scenarios and test cases from business and functional requirements, with traceability across releases.",
      "Run functional, regression, smoke, sanity, integration, system and performance testing across web and mobile before every release.",
      "Audit web accessibility against WCAG guidelines and work with developers to close the gaps.",
      "Test REST APIs in Postman for request and response payloads, status codes, auth and error handling.",
      "Validate booking and payment data with SQL to keep the front end and the database consistent.",
      "Triage high-severity defects with developers and product owners through Jira dashboards, and retest each one until it's resolved.",
      "Support UAT and release validation so critical journeys work before deployment.",
      "Built a Playwright (JavaScript, Page Object Model) script for the flight booking flow up to the payment page.",
      "Take part in sprint planning, backlog grooming, stand-ups and retrospectives, and help shape scope and acceptance criteria with Product.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Testing",
    items: [
      "Manual testing",
      "Functional",
      "Regression",
      "Smoke & sanity",
      "Integration",
      "System",
      "End-to-end",
      "UAT",
      "Performance",
      "Accessibility (WCAG)",
      "Exploratory",
      "Test case design",
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
    items: ["Playwright", "Selenium WebDriver", "TestNG", "JavaScript", "Page Object Model", "XPath locators", "Assertions"],
  },
  {
    group: "Process & Tools",
    items: [
      "Jira",
      "Jenkins",
      "Docker",
      "Excel",
      "Defect lifecycle",
      "Requirement traceability",
      "Release validation",
      "Agile / Scrum",
      "STLC / SDLC",
    ],
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

export const certifications = [
  { name: "Six Sigma Green Belt & Generative AI", issuer: "IIPCL", date: "May 2025" },
  { name: "XPath Locators for Selenium", issuer: "Udemy", date: "Nov 2023" },
  { name: "Microsoft Excel: Beginner to Advanced", issuer: "Udemy", date: "Apr 2023" },
  { name: "The Complete SQL Bootcamp: Zero to Hero", issuer: "Udemy", date: "Dec 2022" },
];
