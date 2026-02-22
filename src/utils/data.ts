import { Experience, Project, Skill, SocialLink, Certification } from "@/types";

export const personalInfo = {
  name: "Sachin Dev Gupta",
  title: "Dynamics 365 and Copilot Solution Architect | Senior Software Engineer",
  email: "your.email@example.com",
  location: "United States",
  bio: "[Description: 'Solution Architect specializing in Microsoft Dynamics 365, Power Platform, and AI-powered Copilot solutions. Passionate about transforming business processes through intelligent automation and enterprise solutions.']",
  resumeUrl: "https://www.linkedin.com/in/sachindevgupta/",
};

export const pageContent = {
  about: {
    title: "About Me",
    background: {
      heading: "Background",
      paragraphs: [
        "I'm a seasoned Solution Architect with extensive expertise in Microsoft Dynamics 365, Power Platform, and AI-driven solutions. With over a decade of experience at HCL America Inc., I specialize in designing and implementing enterprise-grade CRM solutions that drive digital transformation.",
        "My journey in technology has been focused on bridging business requirements with cutting-edge Microsoft technologies. I'm passionate about leveraging Microsoft Copilot, Azure AI, and intelligent automation to create solutions that not only meet today's challenges but also prepare organizations for tomorrow's opportunities.",
      ],
    },
    whatIDo: {
      heading: "What I Do",
      items: [
        "Architect and implement Dynamics 365 CE (Customer Engagement) solutions",
        "Design and deploy Microsoft Copilot and AI-powered business solutions",
        "Build Power Platform applications (Power Apps, Power Automate, Power BI)",
        "Develop custom integrations and plugins for Dynamics 365",
        "Lead CI/CD automation and DevOps pipelines for CRM deployments",
        "Mentor teams on best practices for Microsoft Cloud technologies",
      ],
    },
    skillsHeading: "Skills & Technologies",
    certificationsHeading: "Certifications",
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey and roles",
  },
  projects: {
    title: "Projects",
    subtitle: "A collection of my work and side projects",
    emptyMessage: "Projects coming soon! Check back later to see my portfolio.",
    featured: {
      heading: "Featured Projects",
      subtitle: "Some of my recent work",
    },
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have a question or want to work together? Feel free to reach out!",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully! I'll get back to you soon.",
    },
    info: {
      heading: "Contact Information",
      connectHeading: "Let's Connect",
      connectText: [
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        "Feel free to reach out through any of the channels above, and I'll get back to you as soon as possible!",
      ],
    },
  },
};

export const socialLinks: SocialLink[] = [

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sachindevgupta",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sdgmits",
    icon: "github",
  },
  {
    name: "X (formerly Twitter)",
    url: "https://x.com/sdg_mits",
    icon: "x",
  },
  {
    name: "Microsoft Certifications",
    url: "https://learn.microsoft.com/en-us/users/sdgmits/",
    icon: "microsoft-learn",
  },
];

export const skills: Skill[] = [
  {
    category: "Microsoft Dynamics 365",
    items: ["Dynamics 365 CE", "Customer Service", "Sales Optimization", "Field Service", "Power Platform", "Customer Voice"],
  },
  {
    category: "AI & Copilot",
    items: ["Microsoft Copilot", "Copilot Studio", "Azure AI", "AI Builder", "Azure OpenAI", "AWS"],
  },
  {
    category: "Development",
    items: ["C#", ".NET", "JavaScript", "TypeScript", "Plugin Development", "PCF Controls"],
  },
  {
    category: "Power Platform",
    items: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Power Pages"],
  },
  {
    category: "DevOps & Tools",
    items: ["Azure DevOps", "CI/CD Pipelines", "Git", "PowerShell", "XRM Tooling", "Salesforce"],
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Microsoft Certified: AI Business Professional",
    issuer: "Microsoft",
    date: "2026",
    url: "https://learn.microsoft.com/en-us/users/sdgmits/credentials/6f229f7876b3001a",
    logo: "/certifications/ai-business-professional.svg",
  },
  {
    id: "2",
    name: "Microsoft Power Platform Functional Consultant",
    issuer: "Microsoft",
    date: "2024",
    url: "https://learn.microsoft.com/en-us/users/sdgmits/",
    logo: "/certifications/mcse-badge.svg",
  },
  {
    id: "3",
    name: "MCSE: Business Applications",
    issuer: "Microsoft",
    date: "2019",
    url: "https://learn.microsoft.com/en-us/users/sdgmits/credentials/certification-o-/mcse-business-applications?tab=credentials-tab",
    logo: "/certifications/MCSE-Business-Applications-2019.png",
  }
  // Add more certifications as needed
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "HCL America Inc.",
    companyUrl: "https://www.hcltech.com",
    role: "Solution Architect | Senior Technical Consultant",
    location: "Remote, United States",
    startDate: "January 2020",
    endDate: "Present",
    description: "Leading enterprise-wide Dynamics 365 and Power Platform transformations. Architecting AI-powered solutions using Microsoft Copilot Studio and Azure AI to drive digital innovation and business process automation.",
    achievements: [
      "Architected and delivered 15+ enterprise-scale Dynamics 365 CE implementations across healthcare, manufacturing, and financial services",
      "Led the integration of Microsoft Copilot and generative AI capabilities into CRM workflows, improving user productivity by 40%",
      "Designed and implemented comprehensive CI/CD pipelines for Dynamics 365 using Azure DevOps, reducing deployment time by 60%",
      "Established solution architecture standards and best practices for Power Platform development across the organization",
      "Mentored cross-functional teams of 20+ developers on advanced Dynamics 365 customization, PCF controls, and plugin development",
    ],
    technologies: ["Dynamics 365 CE", "Microsoft Copilot Studio", "Azure AI", "Power Platform", "C#", ".NET", "Azure DevOps", "Azure Logic Apps"],
  },
  {
    id: "2",
    company: "HCL America Inc.",
    companyUrl: "https://www.hcltech.com",
    role: "Senior Consultant - Dynamics 365",
    location: "United States",
    startDate: "March 2017",
    endDate: "December 2019",
    description: "Led technical implementation of Dynamics 365 CRM solutions for Fortune 500 clients. Specialized in custom plugin development, integrations, and Power Platform solutions.",
    achievements: [
      "Successfully delivered 10+ Dynamics 365 implementations with on-time and within-budget delivery",
      "Developed complex custom plugins and workflow extensions to meet unique business requirements",
      "Built integration solutions connecting Dynamics 365 with SAP, Salesforce, and legacy systems",
      "Implemented Power BI dashboards and reports providing real-time business insights to C-level executives",
      "Trained and mentored junior consultants on Dynamics 365 development methodologies",
    ],
    technologies: ["Dynamics 365 CE", "Power Apps", "Power Automate", "C#", ".NET", "JavaScript", "Azure", "SQL Server"],
  },
  {
    id: "3",
    company: "HCL America Inc.",
    companyUrl: "https://www.hcltech.com",
    role: "Consultant - Microsoft Dynamics CRM",
    location: "United States",
    startDate: "August 2014",
    endDate: "February 2017",
    description: "Specialized in Microsoft Dynamics CRM development and implementation. Focused on customization, configuration, and client-facing technical consulting.",
    achievements: [
      "Developed custom solutions for Dynamics CRM 2015/2016 across Sales, Customer Service, and Field Service modules",
      "Created reusable JavaScript libraries and web resources to enhance user experience and productivity",
      "Performed data migration from legacy systems to Dynamics CRM using SSIS and custom migration tools",
      "Collaborated with business analysts to translate requirements into technical solutions",
      "Earned Microsoft Certified Professional (MCP) and MCSE: Business Applications certifications",
    ],
    technologies: ["Dynamics CRM 2015/2016", "JavaScript", "C#", ".NET", "SQL Server", "SSIS", "jQuery"],
  },
];

export const projects: Project[] = [];

// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "E-Commerce Platform",
//     description: "A full-featured e-commerce platform with payment integration and inventory management.",
//     longDescription: "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, and payment processing using Stripe API.",
//     technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com/yourusername/project",
//     featured: true,
//     category: "Web Development",
//   },
//   {
//     id: "2",
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates.",
//     technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
//     githubUrl: "https://github.com/yourusername/project",
//     featured: true,
//     category: "Web Development",
//   },
//   {
//     id: "3",
//     title: "Weather Dashboard",
//     description: "A weather dashboard displaying real-time weather data with interactive charts.",
//     technologies: ["Vue.js", "Chart.js", "Weather API"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com/yourusername/project",
//     featured: true,
//     category: "Data Visualization",
//   },
//   {
//     id: "4",
//     title: "Portfolio CMS",
//     description: "A content management system for managing portfolio projects.",
//     technologies: ["Next.js", "Sanity.io", "Tailwind CSS"],
//     featured: false,
//     category: "Web Development",
//   },
// ];
