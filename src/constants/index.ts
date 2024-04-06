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
  addshop,
  Quiz,
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
    name: "add shop",
    description:"A web platform allowing users to add product information with diverse features such as adding product names, categories, prices, product descriptions, and product images for clear visibility to customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: addshop,
    sourceCodeLink: "https://github.com/bestzaxd",
  },
  {
    name: "Quiz",
    description:
      "A web platform designed to enable users to create and participate in quizzes offers an engaging and interactive experience. It typically includes a range of features to enhance the quiz-taking process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: Quiz,
    sourceCodeLink: "https://github.com/bestzaxd",
  },
];

export { services, technologies, experiences, testimonials, projects };
