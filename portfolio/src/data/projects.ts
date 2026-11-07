export interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  title: string;
  skills: string[];
  highlights: { title: string; detail: string }[];
  color: string;
  glow: string;
  link?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "skyinventories",
    name: "SkyInventories",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Docker",
    ],
    category: "Mobile App & Backend",
    title:
      "A Connected Logistics Platform For Warehouses, Shipments And Partner Operations",
    highlights: [
      {
        title: "Cross-platform",
        detail:
          "Unified warehouse, cargo, shipment and document workflows in one mobile platform.",
      },
      {
        title: "Live operations",
        detail:
          "Delivered tracking, operational reports and Excel exports for operations teams.",
      },
    ],
    color: "bg-[#e9f4ff] dark:bg-[#192c3c]",
    glow: "shadow-[0_-16px_45px_-8px_#91c3f4] dark:shadow-[0_-16px_45px_-8px_#284c70]",
  },
  {
    id: "premiercare",
    name: "PremierCare",
    skills: [
      "React Native",
      "Expo",
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
    ],
    category: "Mobile App, Web App & Admin",
    title:
      "A Hospital Platform Connecting Patient Care, Appointments And Health Wallets",
    highlights: [
      {
        title: "Connected care",
        detail:
          "Connected patient appointments, health wallets and staff workflows across mobile and web.",
      },
      {
        title: "Real-time",
        detail:
          "Implemented telehealth call alerts and real-time updates with push notifications.",
      },
    ],
    color: "bg-[#f0eaff] dark:bg-[#2d2340]",
    glow: "shadow-[0_-16px_45px_-8px_#bda5f0] dark:shadow-[0_-16px_45px_-8px_#564077]",
  },
  {
    id: "rideme",
    name: "RideMe",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Mapbox",
      "Socket.IO",
      "Firebase",
    ],
    category: "Passenger & Driver Mobile Apps",
    title:
      "Passenger And Driver Apps For A Real-Time Ride-Hailing Experience",
    highlights: [
      {
        title: "Two connected apps",
        detail:
          "Built passenger and driver experiences covering trip workflows, chat, payments, driver onboarding, and earnings.",
      },
      {
        title: "Real-time coordination",
        detail:
          "Integrated maps, location services, real-time trip updates, and push notifications into the mobile apps using the existing backend APIs.",
      },
    ],
    color: "bg-[#e9fbd5] dark:bg-[#293722]",
    glow: "shadow-[0_-16px_45px_-8px_#b4ed76] dark:shadow-[0_-16px_45px_-8px_#5a7c36]",
  },
  {
    id: "hog",
    name: "HOG",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Paystack",
      "Docker",
    ],
    category: "E-commerce Platform & Admin",
    title:
      "A Complete Shopping Experience From Product Discovery To Checkout And Fulfillment",
    highlights: [
      {
        title: "Commerce",
        detail:
          "Connected product browsing, checkout, payment integration and order fulfillment.",
      },
      {
        title: "Connected support",
        detail:
          "Added WhatsApp-assisted product discovery and support alongside admin operations tools.",
      },
    ],
    color: "bg-[#fff7df] dark:bg-[#3a321f]",
    glow: "shadow-[0_-16px_45px_-8px_#f0dba0] dark:shadow-[0_-16px_45px_-8px_#736039]",
    link: "https://hogcompany.com",
  },
];
