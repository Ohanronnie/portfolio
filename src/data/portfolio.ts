import skyinventoriesScreenshot1 from "../assets/projects/skyinventories-iphone17-promax-1.jpg";
import skyinventoriesScreenshot2 from "../assets/projects/skyinventories-iphone17-promax-2.png";
import skyinventoriesScreenshot3 from "../assets/projects/skyinventories-iphone17-promax-3.png";
import premiercareIphone16eScreenshot1 from "../assets/projects/premiercare-iphone16e-1.png";
import premiercareIphone16eScreenshot2 from "../assets/projects/premiercare-iphone16e-2.jpg";
import premiercareIphone16eScreenshot3 from "../assets/projects/premiercare-iphone16e-3.png";
import premiercareIphone16eScreenshot4 from "../assets/projects/premiercare-iphone16e-4.png";
import premiercareDesktopLatestScreenshot1 from "../assets/projects/premiercare-desktop-latest-1.png";
import premiercareDesktopLatestScreenshot2 from "../assets/projects/premiercare-desktop-latest-2.png";
import premiercareDesktopLatestScreenshot3 from "../assets/projects/premiercare-desktop-latest-3.png";
import skylinewebsiteDesktopScreenshot1 from "../assets/projects/skylinewebsite-desktop-1.jpg";
import skylinewebsiteDesktopScreenshot2 from "../assets/projects/skylinewebsite-desktop-2.jpg";
import skylinewebsiteDesktopScreenshot3 from "../assets/projects/skylinewebsite-desktop-3.jpg";
import hogDesktopScreenshot1 from "../assets/projects/hog-desktop-1.png";
import hogDesktopScreenshot2 from "../assets/projects/hog-desktop-2.jpg";
import hogDesktopScreenshot3 from "../assets/projects/hog-desktop-3.jpg";

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  link: string;
  image?: string;
  gallery?: string[];
  highlights?: string[];
}

export const portfolioData = {
  name: "Titiloye Paul",
  role: "Full Stack & Mobile App Developer",
  bio: "Experienced Full Stack and Mobile App Developer with a passion for creating efficient backend systems, responsive web interfaces, and high-quality mobile experiences. I specialize in Node.js, React.js, Next.js, React Native, and modern database management.",
  skills: [
    "React", "Next.js", "React Native", "Expo", "TypeScript", "Node.js", "Express.js", "NestJS", "MongoDB", "TailwindCSS", "Docker", "AWS", "Rust"
  ],
  projects: [
    {
      id: 5,
      slug: "skyinventories",
      title: "Skyinventories Logistics Platform",
      description: "Cross-platform logistics platform with an Expo mobile app and a NestJS API for managing warehouses, containers, shipments, cargo, documents, and partner operations.",
      longDescription: "Built and maintained a production logistics platform for warehouse and shipment operations with strong tracking, reporting, notifications, and secure user access. It supports day-to-day workflows for partners and operations teams across mobile and web touchpoints.",
      tech: ["Expo", "React Native", "TypeScript", "NestJS", "MongoDB", "Docker", "Caddy"],
      link: "#",
      gallery: [skyinventoriesScreenshot1, skyinventoriesScreenshot2, skyinventoriesScreenshot3],
      highlights: [
        "Unified operations flow for warehouses, customers, containers, shipments, cargo, and documents in one platform.",
        "Built-in reporting with Excel exports so teams can track movement, status, and operational performance quickly.",
        "Production-ready deployment using containers and Caddy with API version routing for safer rollout and upgrades.",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 6,
      slug: "premier-care-hospital-management",
      title: "PremierCare Hospital Management System",
      description: "Multi-surface hospital platform with patient mobile app, web dashboards, and an API backend for appointments, records, notifications, and health wallet operations.",
      longDescription: "Built and maintained a hospital management system for patient and doctor workflows, including appointments, telehealth call alerts, wallet contributions, claims, dependant management, and realtime notifications. Focused on reliable healthcare operations and smooth user experience across staff and patient surfaces.",
      tech: ["Expo", "React Native", "React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "Docker"],
      link: "#",
      gallery: [
        premiercareDesktopLatestScreenshot1,
        premiercareDesktopLatestScreenshot2,
        premiercareDesktopLatestScreenshot3,
        premiercareIphone16eScreenshot1,
        premiercareIphone16eScreenshot2,
        premiercareIphone16eScreenshot3,
        premiercareIphone16eScreenshot4
      ],
      highlights: [
        "Smooth patient journey from appointment booking to in-app alerts and telehealth call access.",
        "Integrated health wallet for plan subscriptions, contributions, claims, and dependant coverage management.",
        "Realtime communication powered by Socket.IO, with Expo push-token registration for reliable mobile notifications.",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 7,
      slug: "skyline-shipping-web-platform",
      title: "Skyline Shipping Web Platform",
      description: "Full shipping platform with storefront and admin experiences for orders, shipments, parcels, quotations, and product management.",
      longDescription: "Built and maintained Skyline Shipping Solutions to handle customer orders, parcel submissions, quotation requests, shipment tracking, and admin-side operations in one connected platform. Delivered secure authentication, smooth checkout/order flows, and operational tooling for the shipping team.",
      tech: ["Next.js", "React", "NestJS", "TypeScript", "MongoDB", "Docker", "Caddy", "JWT"],
      link: "https://skylineshippingsolutions.com",
      gallery: [skylinewebsiteDesktopScreenshot1, skylinewebsiteDesktopScreenshot2, skylinewebsiteDesktopScreenshot3],
      highlights: [
        "Unified platform experience across customer storefront, admin operations, and backend business logic.",
        "Clear separation between customer-facing actions and admin operations, making order handling faster and less error-prone.",
        "Comprehensive shipping operations support for orders, shipments, parcels, quotations, rate handling, and catalog workflows.",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 8,
      slug: "hog-ecommerce-platform",
      title: "HOG E-commerce Platform",
      description: "End-to-end e-commerce platform with customer storefront, admin operations panel, and backend APIs for catalog, orders, payments, and customer support flows.",
      longDescription: "Built and maintained HOG’s e-commerce ecosystem across customer shopping, admin product/order management, and backend services. The platform supports catalog browsing, cart and checkout, order tracking, secure authentication, payment integration, and operational workflows for inventory and fulfillment. It also includes WhatsApp-assisted customer interactions for product discovery and support.",
      tech: ["Next.js", "React", "NestJS", "TypeScript", "MongoDB", "Docker", "Caddy", "Paystack", "WhatsApp"],
      link: "https://hogcompany.com",
      gallery: [hogDesktopScreenshot1, hogDesktopScreenshot2, hogDesktopScreenshot3],
      highlights: [
        "Connected customer shopping and admin operations in one continuous commerce workflow.",
        "Implemented order lifecycle capabilities including checkout, tracking, and fulfillment status handling.",
        "Extended support channels with WhatsApp-based product discovery and customer assistance.",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 1,
      slug: "x-twitter-manager",
      title: "X (Twitter) Manager",
      description: "Full-stack AI-powered platform for automating and monetizing Twitter (X) content, featuring account connection, smart scheduling, and copyright-safe AI content generation.",
      longDescription: "Built an automation and growth platform for Twitter creators and teams with secure account connection, scheduling workflows, and AI-assisted content generation. The system reduced manual posting effort and improved posting consistency.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Gemini API"],
      link: "https://itoolsai.com",
      highlights: [
        "Automated content scheduling and queue management",
        "AI-assisted caption generation with safety controls",
        "Creator-focused dashboard for post analytics",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 2,
      slug: "chat-sphere",
      title: "ChatSphere",
      description: "Real-time chat application with seamless communication between users, efficient message handling, and a user-friendly interface built with WebSockets.",
      longDescription: "Developed a real-time messaging app with low-latency communication and stable socket sessions. Focused on clean UX, conversation state handling, and scalable backend message flow.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
      link: "https://chats-sphere.netlify.app",
      highlights: [
        "Live messaging with socket-based transport",
        "Session-aware connection handling",
        "Mobile-friendly, responsive chat interface",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 3,
      slug: "link-management-platform",
      title: "Link Management Platform",
      description: "Web application that allows users to create a customizable landing page with multiple links, optimized for social media profiles.",
      longDescription: "Created a profile-link aggregation platform where users can build a public page and manage multiple destinations from one shareable URL. The product focused on easy customization and reliable access from social traffic.",
      tech: ["NestJS", "Node.js", "MongoDB", "TailwindCSS"],
      link: "#",
      highlights: [
        "Custom profile pages with link collections",
        "Simple dashboard for editing and publishing",
        "Optimized for social profile conversion",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    },
    {
      id: 4,
      slug: "gmail-whatsapp-notifier",
      title: "Gmail-to-WhatsApp Notifier",
      description: "Automated system that fetches Gmail messages via the Gmail API and forwards them instantly to WhatsApp for real-time notifications.",
      longDescription: "Implemented an automation service that listens for new Gmail messages and relays key alerts to WhatsApp, enabling faster response times for time-sensitive communication.",
      tech: ["Next.js", "Node.js", "Gmail API", "WhatsApp Web.js"],
      link: "#",
      highlights: [
        "Near real-time email event forwarding",
        "Customizable notification pipelines",
        "Reduced missed-message response delays",
        "CI/CD pipelines are automated with GitHub Actions for testing and deployment."
      ]
    }
  ] as PortfolioProject[],
  contact: {
    email: "titiloyepaul68@gmail.com",
    github: "https://github.com/ohanronnie",
    linkedin: "https://linkedin.com/in/titiloyepaul",
    twitter: "https://x.com/rxnnie_tech",
    website: "https://titiloyepaul.netlify.app"
  },
  experience: [
    {
      company: "Itools AI",
      role: "MERN Stack Developer",
      period: "June 2023 — February 2024",
      description: "Led the development of server-side applications using Node.js, Express.js, and MongoDB. Built responsive interfaces using Next.js and Tailwind CSS. Explored ways to integrate C++ and native binaries into Node.js."
    }
  ],
  services: [
    {
      title: "Mobile App Development",
      description: "Building performant cross-platform mobile apps with React Native and Expo, focused on smooth UX, realtime features, and reliable API integration.",
      stack: ["React Native / Expo", "Mobile UI / UX", "Push Notifications", "API Integration"]
    },
    {
      title: "Frontend Development",
      description: "Building responsive and interactive interfaces using React.js, Next.js, and Tailwind CSS with a focus on user experience.",
      stack: ["HTML / CSS / JS", "React / Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend & Full Stack Solutions",
      description: "Scalable backend systems and end-to-end full stack delivery using Node.js, Express.js, NestJS, MongoDB, Docker, AWS, and CI/CD pipelines.",
      stack: ["NestJS / Express / Node.js", "PostgreSQL / MongoDB", "Prisma / TypeORM", "Socket.io", "CI/CD Pipelines (GitHub Actions)"]
    }
  ],
  education: {
    institution: "Federal University Of Technology Akure (FUTA)",
    degree: "Mechatronics",
    year: "2025"
  },
  articles: [
    {
      id: 1,
      title: "The Future of React Server Components",
      date: "Oct 12, 2024",
      readTime: "5 min read",
      link: "#"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS v4",
      date: "Sep 28, 2024",
      readTime: "8 min read",
      link: "#"
    },
    {
      id: 3,
      title: "Why I switched from VS Code to Zed",
      date: "Aug 15, 2024",
      readTime: "4 min read",
      link: "#"
    }
  ]
};

export function getProjectBySlug(slug: string) {
  return portfolioData.projects.find(project => project.slug === slug);
}
