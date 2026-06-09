export const profile = {
  name: "Winnie Choong",
  title: "Senior Software Developer",
  location: "Kuala Lumpur, Malaysia",
  email: "winnie.chngsm@gmail.com",
  github: "https://github.com/winnie080700",
  resumePath: "/resume.pdf",
  summary:
    "Senior Software Developer with 4+ years of experience architecting API-driven systems, internal platforms, migration tooling, and AI-integrated workflows.",
};

export const navigation = [
  { label: "Main", href: "/" },
  { label: "Academic", href: "/academic" },
  { label: "Experiences", href: "/experiences" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const techStack = {
  backend: ["C#", "ASP.NET", "RESTful API", "Java", "Spring Boot", "Python", "Node.js", "NestJS"],
  frontend: ["React", "Angular", "Vue", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "jQuery"],
  database: ["MySQL", "MSSQL", "PostgreSQL", "Redis", "Supabase", "Cloudflare D1"],
  tools: ["Git", "GitHub", "GitLab", "Jira", "Docker", "Jenkins", "AWS S3", "Vercel", "Postman", "Navicat"],
  ai: ["Prompt Engineering", "AI Customer Support Bot", "AI-assisted tooling", "Workflow automation"],
};

export const academic = {
  school: "Tunku Abdul Rahman University College (TARUC / TARUMT)",
  degree: "Bachelor of Information Technology (HONS), Internet Technology",
  period: "February 2020 - January 2022",
  cgpa: "3.66",
  achievements: [
    "Merit Academic Achievement Award",
    "President & Dean List",
    "MUET Band 4",
    "Interactive Gaming Society (IGS) Committee 2019",
  ],
};

export const workExperience = [
  {
    role: "Senior Software Developer",
    company: "Updev Labs Sdn. Bhd.",
    location: "Bangsar South, Kuala Lumpur",
    period: "July 2023 - Present",
    summary:
      "Architected, enhanced, and maintained API-driven business systems across internal platforms, migration tools, AI automation, and third-party service integrations.",
    stack: ["C#", "ASP.NET", "Java", "Spring Boot", "Python", "React", "Angular", "MySQL", "Redis", "Docker", "Jenkins", "AWS S3"],
  },
  {
    role: "IT Specialist",
    company: "Original Intelligence Sdn. Bhd.",
    location: "Petaling Jaya, Selangor",
    period: "January 2022 - July 2023",
    summary:
      "Enhanced and extended business applications across workshop management, inventory tracking, e-commerce, and HR workflows.",
    stack: ["VB.NET", "ASP.NET", "JavaScript", "HTML", "CSS", "Bootstrap", "jQuery", "Xamarin Forms", "MSSQL"],
  },
];

export const projectExperience = [
  {
    name: "Telegram AI Customer Support Bot",
    summary:
      "Architected a C# Telegram bot that automates customer query handling and improves AI response quality through prompt workflow refinement.",
    stack: ["C#", "Telegram Bot", "AI", "Prompt Engineering"],
  },
  {
    name: "Internal Financial Management System",
    summary:
      "Engineered C# RESTful APIs and React workflows for audit support, invoice processing, and internal financial operations.",
    stack: ["C#", "REST API", "React", "MySQL"],
  },
  {
    name: "Cloudflare D1 to MySQL Migration CLI",
    summary:
      "Built migration tooling for schema export, data import, validation, and database transfer from Cloudflare D1 into MySQL.",
    stack: ["CLI", "Cloudflare D1", "MySQL", "Data Migration"],
  },
  {
    name: "Google Drive Data Retrieval CLI",
    summary:
      "Created AI-assisted CLI tooling for retrieving structured data from Google Sheets and Docs.",
    stack: ["CLI", "Google Sheets", "Google Docs", "AI-assisted tooling"],
  },
  {
    name: "Risk-Weighted Engagement System",
    summary:
      "Architected and implemented system workflows using Angular, TypeScript, NestJS, MySQL, Redis, and Scalar.",
    stack: ["Angular", "TypeScript", "NestJS", "MySQL", "Redis", "Scalar"],
  },
  {
    name: "Splity",
    summary:
      "Created a bill-splitting web application for organizing shared expenses within groups.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
];
