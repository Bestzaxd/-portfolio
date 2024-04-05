import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  Network,
  backend,
  Ns,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  github,
  figma,
  MYsql,
  Phrapokklao,
  SNC,
  Advice,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Network Engineer",
    icon: Network,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Network Systems",
    icon: Ns,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MYsql",
    icon: MYsql,
  },
];

const experiences: TExperience[] = [
  {
    title: "Electronic Technician",
    companyName: "Phrapokklao Hospital",
    icon: Phrapokklao,
    iconBg: "#383E56",
    date: "November 2019 - February 2020",
    points: [
      "Monitoring and maintaining the CCTV network LAN cable system, including replacing LAN cables when necessary to ensure stable communication and data transmission.",
      "Upgrading or replacing the data storage system of the CCTV, such as increasing storage capacity or improving efficiency. ",
      "Inspecting and maintaining the emergency call buttons of hospital beds to ensure they are operational and efficient.",
    ],
  },
  {
    title: "production line",
    companyName: "SNC Former Public Company Limited",
    icon: SNC,
    iconBg: "#E6DEDD",
    date: "April 2021 - June 2021",
    points: [
      "Working on assembling air conditioning equipment and maintaining machinery used in air conditioning production.",
      
    ],
  },
  {
    title: "Stock Management Department",
    companyName: "Advance IT Infrastructure Co., Ltd. (Public)",
    icon: Advice,
    iconBg: "#383E56",
    date: "July 2021 - August 2021",
    points: [
      "Managing customer orders based on system indications, ensuring accuracy and timeliness.",
      "Conducting thorough product checks to verify inventory completeness and quality assurance.",
      "Receiving incoming shipments from primary suppliers and meticulously logging them into the system for inventory tracking and management.",
      
    ],
  },
];

const testimonials: TTestimonial[] = [
  
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
