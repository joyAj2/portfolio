import { label } from "framer-motion/client";

export const person = {
  name: "Joy Ejeh Ave",
  initial: "J",
  role: "Full-Stack & Mobile Developer",
  location: "Accra, Ghana",
  timeZone: "Africa/Accra",
};

export type Project = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  role: string;
  stack: string[];
  image: { src: string; alt: string };
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "easedata-store",
    title: "EaseData Store",
    kicker: "Live e-commerce platform",
    summary:
      "A live platform for buying mobile data bundles at discounted rates, with product listings, a full checkout flow and payment integration.",
    role: "Full-stack development",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: {
      src: "https://images.pexels.com/photos/29502378/pexels-photo-29502378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "A smartphone and laptop displaying an online shopping site",
    },
    liveUrl: "https://easedata.store",
  },
  {
    id: "job-match",
    title: "Job Match",
    kicker: "AI job matching platform",
    summary:
      "A backend that scrapes tech roles using AI automation and sends personalised email alerts to matched users, with authentication, profile management and role-matching logic.",
    role: "Backend architecture",
    stack: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: {
      src: "https://images.pexels.com/photos/5439368/pexels-photo-5439368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Two people in a job interview inside a bright modern office",
    },
    repoUrl: "https://github.com/joyAj2/To-job-match-be",
  },
  {
    id: "cs-department",
    title: "Computer Science Department Website",
    kicker: "University of Ghana",
    summary:
      "A fully responsive 10-page website for the Computer Science department, designed to give students and visitors a smooth experience on any device.",
    role: "Web design and development",
    stack: ["HTML", "CSS", "JavaScript", "Responsive design"],
    image: {
      src: "https://images.pexels.com/photos/8197556/pexels-photo-8197556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Students and a lecturer engaged in a university classroom discussion",
    },
    repoUrl: "https://github.com/joyAj2/computer-sci-webssite",
  },
];

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
  role: "IT Intern",
  organization: "University of Ghana — Information Technology Directorate",
  location: "Accra, Ghana",
  period: "Sep 20, 2026 — Oct 20, 2026",
  highlights: [
    "Completed an internship at the University of Ghana Information Technology Directorate, gaining practical exposure to IT operations and technical support.",
  ],
  },
  {
    role: "Software Developer Intern",
    organization: "The ECK Group (Developers Hub)",
    location: "Remote",
    period: "Sep 2025 — Dec 2025",
    highlights: [
      "Completed an industrial attachment contributing to software development projects as part of the University of Ghana's internship programme.",
      "Worked under the supervision of Godwill Sarfo Kantanka, applying full-stack development skills in a professional remote team.",
    ],
  },
  {
    role: "Marketing & Digital Outreach Intern",
    organization: "Masters Learners Consult",
    location: "Accra, Ghana (Remote)",
    period: "Mar 2024 — Present",
    highlights: [
      "Grew the company's online presence across digital platforms and social channels.",
      "Conducted market research to identify service expansion opportunities.",
    ],
  },
  {
    role: "Student Frontend Developer",
    organization: "Self-directed / Academic Projects",
    location: "Accra, Ghana",
    period: "Jan 2023 — Present",
    highlights: [
      "Built responsive multi-page websites with HTML, CSS, Tailwind CSS, React and Vue.js, with MongoDB backends.",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Java", "HTML5", "CSS3", "Python", "SQL"] },
  { label: "Frontend", items: ["React.js", "React Native", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend & Data", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Prisma", "Mongoose"] },
  { label: "Cloud & Tools", items: ["AWS", "Vercel", "Git", "GitHub"] },
];

export const education = {
  degree: "BSc. Computer Science",
  school: "University of Ghana, Accra, Ghana",
  period: "Expected 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Fundamentals",
    "Computer Networks",
    "Web Design",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
  ],
};

export const focusAreas = [
  {
    title: "Artificial Intelligence",
    text: "Turning messy real-world data into tools that help people make better decisions.",
  },
  {
    title: "Backend Engineering",
    text: "Designing reliable APIs, data models and services that hold up under real use.",
  },
  {
    title: "Web & Mobile",
    text: "Building full-stack web products and cross-platform mobile apps with React and React Native.",
  },
];

export const contactLinks = [
  { label: "Email", value: "joyejeh0@gmail.com", href: "mailto:joyejeh0@gmail.com" },
  { label: "Phone", value: "+233 509 877 341", href: "tel:+233509877341" },
  { label: "GitHub", value: "github.com/joyAj2", href: "https://github.com/joyAj2" },
  { label: "Website", value: "easedata.store", href: "https://easedata.store" },
  { label: "LinkedIn", value: "linkedin.com/in/joy-ejeh-ave", href: "https://www.linkedin.com/in/joy-ejeh-4015372b6/" },
];

export const contactTopics = [
  "Full-time role",
  "Internship",
  "Freelance project",
  "Collaboration",
  "Just saying hello",
];

export const marqueeItems = [
  "EaseData Store",
  "AI Job Matching",
  "Backend Engineering",
  "React Native",
  "Full-Stack Web",
  "Accra, Ghana",
];
