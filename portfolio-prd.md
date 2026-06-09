# Winnie Choong Portfolio Website PRD

## 1. Product Overview

Build a creative, developer-personal portfolio website for Winnie Choong, a Senior Software Developer based in Kuala Lumpur. The website should expand beyond the GitHub profile README and present a richer view of her professional background, project ownership, academic history, achievements, resume, and contact options.

The site will be written in English and deployed on Vercel.

## 2. Product Goal

Create a polished portfolio website that positions Winnie as a backend-leaning Senior Software Developer who architects API-driven systems, internal tools, migration workflows, and AI-integrated business solutions.

The website should help recruiters, hiring managers, engineering leads, collaborators, and technical peers understand her experience, strengths, and project scope quickly.

## 3. Target Audience

- Recruiters reviewing technical background and career fit
- Hiring managers looking for backend, API, or full-stack experience
- Engineering leads evaluating system ownership and maintainability mindset
- Collaborators or clients interested in project experience
- GitHub visitors who want more context than the profile README provides

## 4. Positioning

Primary positioning:

> Senior Software Developer focused on API architecture, internal systems, legacy modernization, and AI-integrated workflow automation.

Expanded positioning:

> I architect API-driven systems, internal platforms, and AI-integrated workflows that turn complex business operations into reliable software.

## 5. Tone And Writing Direction

The tone should feel creative and developer-personal while remaining professional. It should show personality without becoming overly casual.

### Copy Principles

- Write in confident, senior-level language.
- Emphasize ownership, architecture, reliability, maintainability, and business workflow value.
- Keep copy clear, concise, and scannable.
- Avoid generic resume phrases where possible.
- Use English throughout the website.

### Preferred Verbs

- Architected
- Engineered
- Led
- Modernized
- Migrated
- Optimized
- Automated
- Integrated
- Standardized
- Enhanced
- Maintained
- Delivered

### Avoid Overusing

- Developed
- Worked on
- Helped with
- Made
- Built things

## 6. Visual Direction

The website should feel like a polished engineering portfolio with a creative developer identity. It should not look like a generic resume template or a badge-heavy GitHub README.

### Visual Thesis

A refined developer portfolio with strong typography, thoughtful spacing, subtle motion, and project-focused storytelling. The design should feel technical, personal, and premium without becoming corporate-heavy.

### Design Principles

- Use strong typography and hierarchy.
- Keep the layout clean and deliberate.
- Avoid excessive cards, generic gradient sections, and cluttered badge walls.
- Use dark or high-contrast sections if they support the creative developer feel.
- Use subtle technical details, such as code-inspired labels, timelines, command-style navigation, or structured project metadata.
- Keep mobile layout polished and readable.

## 7. Interaction Direction

Animations should improve hierarchy and polish, not distract from the content.

Recommended interaction ideas:

- Hero entrance animation with staggered text reveal
- Smooth page transitions or section reveals
- Scroll-based timeline reveals for experience and project details
- Hover interactions for tech stack and project items
- Optional command-palette inspired navigation feel

## 8. Recommended Tech Stack

Recommended implementation stack:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

Reasoning:

Next.js works naturally with Vercel, supports SEO, handles static and dynamic pages well, and allows the portfolio to grow into project case studies or MDX content later.

## 9. Information Architecture

The website should include the following pages:

1. Main Page
2. Academic
3. Experiences
4. Achievements
5. Resume
6. Contact Me

Project details should live inside the Experiences page as a detailed project section, not as a separate top-level Projects page.

## 10. Page Requirements

### 10.1 Main Page

Purpose:

Introduce Winnie, summarize her technical focus, and guide visitors to deeper sections.

Required content:

- Hero section
- Name: Winnie Choong
- Role: Senior Software Developer
- Location: Kuala Lumpur, Malaysia
- Short positioning statement
- About Me section
- Tech Stack overview
- Featured experience highlights
- CTA to Resume
- CTA to Contact Me

Suggested hero copy:

> Winnie Choong  
> Senior Software Developer  
> I architect API-driven systems, internal platforms, and AI-integrated workflows that turn complex business operations into reliable software.

Suggested About Me copy:

> I am a Senior Software Developer based in Kuala Lumpur with 4+ years of experience across backend systems, web applications, internal tools, and legacy modernization. My core strength is architecting maintainable API-driven systems with C#/.NET, while also working across React, Angular, TypeScript, MySQL, Redis, and AI-assisted automation.

### 10.2 Academic Page

Purpose:

Present education background and academic achievements clearly.

Required content:

- Tunku Abdul Rahman University College, TARUC
- Bachelor of Information Technology (HONS), Internet Technology
- CGPA: 3.66
- Merit Academic Achievement Award
- President & Dean List

Suggested tone:

Use concise academic presentation. Avoid over-explaining unless additional academic details are added later.

### 10.3 Experiences Page

Purpose:

Present professional experience, other project experience, and detailed project ownership.

This page should contain three main sections:

1. Work Experience
2. Other Project Experience
3. Detailed Project Section

#### Work Experience

Role: Senior Software Developer  
Company: Updev Labs Sdn. Bhd.  
Location: Bangsar South, Kuala Lumpur  
Date: July 2023 - Present

Suggested summary:

> Architected, enhanced, and maintained API-driven business systems across internal platforms, migration tools, AI automation, and third-party service integrations. Collaborated with cross-functional teams, reviewed code quality, resolved production issues, and supported scalable system delivery.

Key projects:

- Google Drive Data Retrieval CLI for Sheets and Docs
- Cloudflare D1 to MySQL Database Migration CLI
- Telegram AI Customer Support Bot
- Internal Financial Management System
- Legacy Python to C# System Migration
- Third-party Service Provider Platform

Role: IT Specialist  
Company: Original Intelligence Sdn. Bhd.  
Location: Petaling Jaya, Selangor  
Date: January 2022 - July 2023

Suggested summary:

> Enhanced and extended business applications across workshop management, inventory tracking, e-commerce, and HR workflows. Owned implementation, testing, troubleshooting, deployment support, and documentation updates across evolving project scopes.

Key projects:

- Car Workshop Management System and Mobile App
- Inventory Tracking System
- Tadika Book Store E-Commerce Platform
- Human Resources Management System

#### Other Project Experience

Include:

- Ticketing System
- E-commerce Platform
- Web3 Event System
- Risk-Weighted Engagement System
- Bill Splitting System
- Narraverse

Each project should include:

- Project name
- Short description
- Ownership
- Tech stack
- Key responsibilities
- Optional outcome or business value

#### Detailed Project Section

This section should describe all major projects in a deeper format.

Recommended project detail structure:

- Overview
- Problem
- Ownership
- Technical approach
- Stack
- Outcome or value

Recommended detailed projects:

- Telegram AI Customer Support Bot
- Internal Financial Management System
- Google Drive Data Retrieval CLI
- Cloudflare D1 to MySQL Database Migration CLI
- Legacy Python to C# API Migration
- Third-party Service Provider Platform
- Car Workshop Management System and Mobile App
- Ticketing System
- E-commerce Platform
- Web3 Event System
- Risk-Weighted Engagement System
- Splity
- Narraverse

### 10.4 Achievements Page

Purpose:

Collect academic and career achievements in a more curated way.

Required content:

- Merit Academic Achievement Award
- President & Dean List
- CGPA 3.66
- Architected from-scratch CLI tooling
- Led or contributed to AI-integrated customer support workflows
- Migrated legacy systems into modernized C# architecture
- Delivered internal tools supporting business operations

Suggested presentation:

Group achievements into:

- Academic Achievements
- Engineering Achievements
- AI And Automation Highlights

### 10.5 Resume Page

Purpose:

Allow visitors to preview and download the resume.

Required content:

- Embedded preview of `Resume_2026.pdf`
- Download resume button
- Note that phone contact details are available inside the resume
- CTA to email Winnie

Privacy requirement:

Do not display the phone number directly on the website. The phone number may remain inside the resume PDF.

### 10.6 Contact Me Page

Purpose:

Provide a simple way for visitors to contact Winnie by email.

Required content:

- Email: `winnie.chngsm@gmail.com`
- Email-focused contact section
- Mailto button or contact form
- No public phone number
- Optional short message explaining availability for software development opportunities, collaborations, or project discussions

Recommended contact implementation options:

1. Mailto link
2. Vercel serverless API with Resend
3. Formspree or EmailJS

For the first version, a mailto link is acceptable unless a production contact form is required.

## 11. Tech Stack Content

Recommended grouped display:

### Backend

- C#
- ASP.NET
- Java
- Spring Boot
- RESTful API
- Node.js
- NestJS

### Frontend

- React
- Angular
- Vue
- TypeScript
- JavaScript
- HTML
- CSS
- Bootstrap
- Tailwind CSS
- jQuery

### Database

- MySQL
- MSSQL
- PostgreSQL
- Redis
- Supabase
- Cloudflare D1

### Tools And Platforms

- Git
- GitHub
- GitLab
- Jira
- Docker
- Jenkins
- AWS S3
- Vercel
- Postman
- Navicat
- Visual Studio
- VS Code
- SourceTree

### AI And Automation

- Prompt Engineering
- AI Customer Support Bot
- AI-assisted tooling
- Workflow automation

## 12. README Strategy

The GitHub profile README should become a concise gateway to the full portfolio website.

### README Should Include

- Short intro
- Current role and technical focus
- Link to portfolio website
- Compact tech stack
- Featured projects
- Resume and email links

### README Should Avoid

- Long work history
- Too many badges
- Full project descriptions
- Public phone number
- Overly casual closing if the portfolio is intended for professional use

Suggested README positioning:

> Hi, I am Winnie Choong, a Senior Software Developer based in Kuala Lumpur. I architect API-driven systems, internal tools, and AI-integrated workflows with a focus on maintainability, reliability, and practical business value.

## 13. Functional Requirements

- Website must be written in English.
- Website must include all required pages.
- Website must be responsive for desktop, tablet, and mobile.
- Resume page must support PDF preview and download.
- Contact page must allow visitors to email Winnie.
- Project details must live inside the Experiences page.
- README should be updated after the website is implemented.
- Website must be deployable to Vercel.

## 14. Non-Functional Requirements

- Fast page load.
- Clean SEO metadata.
- Accessible text contrast.
- Keyboard-friendly navigation.
- Mobile-safe spacing and typography.
- Smooth but restrained animation.
- Maintainable content structure.
- No public phone number on website pages.

## 15. Success Criteria

- Visitors understand Winnie’s role and engineering focus within 10 seconds.
- The website feels more detailed and polished than the GitHub README.
- Project sections clearly communicate ownership, stack, and value.
- Resume can be previewed and downloaded.
- Contact path is clear and email-focused.
- The site is ready for Vercel deployment.

## 16. Open Implementation Decisions

These can be decided before code implementation:

- Whether the contact page uses only `mailto:` or a backend email service.
- Whether project data should be stored in local TypeScript data files or MDX.
- Whether the design uses a dark-first visual system or a mixed light/dark editorial layout.
- Whether the resume preview uses an iframe, object embed, or custom PDF preview library.

