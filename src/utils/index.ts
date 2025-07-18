export const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

export const itemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const aboutContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const services = [
  { id: 1, name: "Frontend Development" },
  { id: 2, name: "UI Implementation" },
  { id: 3, name: "Component Libraries & Design Systems" },
  { id: 4, name: "Performance Optimization" },
  { id: 5, name: "Third-party Integrations" },
  { id: 6, name: "Dashboard & Web App Interfaces" },
  { id: 7, name: "Testing & Maintenance" },
];

export const experiences = [
  {
    id: 1,
    title: "frontend developer",
    company: "Vertu Motors",
    period: "2023-24",
  },
  {
    id: 2,
    title: "frontend developer",
    company: "Christ Liberty Church",
    period: "2022-23",
  },
  {
    id: 3,
    title: "software developer",
    company: "Just Computers Ltd",
    period: "2021-22",
  },
];
