import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kevelino",
  initials: "K",
  url: "https://kevelino.vercel.app",
  location: "Douala, Cameroun",
  locationLink: "https://www.google.com/maps/place/douala",
  description:
    "Transforming ideas into products.",
  summary:
    "Full-Stack Developer specialized in Saas Building, transforming complex ideas into clean, fast, and scalable digital products.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "MySQL",
    "Prisma",
    "AWS",
    "VPS",
    "Docker",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "justkevelino@gmail.com",
    tel: "+237681066371",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kevelino",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kevelino",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kvlino",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@kevelino",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:justkevelino@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  projects: [
    {
      title: "Vendo",
      href: "https://vendo-delta-five.vercel.app/",
      dates: "2025 - 2026",
      active: false,
      description:
        "Chrome extension to optimize description for Vinted, LebonCoin, etc. Helps sellers increase visibility and close sales faster.",
      technologies: ["Javascript", "Chrome API", "AI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://vendo-delta-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Trackly",
      href: "https://trickly.vercel.app",
      dates: "2025 - 2026",
      active: false,
      description:
        "A web app to track all your excursion and habitude. Visualize your progress and stay consistent with your goals.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://trickly.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Doculabs",
      href: "https://doculabs.vercel.app",
      dates: "2025 - Present",
      active: true,
      description:
        "A SaaS to analyze your professional documents (Service Offer, Quote, Business Pitch, etc.) and suggest improvements using advanced AI.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "PostgreSQL",
        "OpenAI",
      ],
      links: [
        {
          type: "Website",
          href: "https://doculabs.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Earlist",
      href: "https://earlist.vercel.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Capture early fans, ask 3 validation questions, and get an AI-generated report — before you write a single line of code.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "GenAI",
      ],
      links: [
        {
          type: "Website",
          href: "https://earlist.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Faktum",
      href: "https://faktum-app.vercel.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Create, share, and manage quotes and invoices. Designed for Cameroonian law firms and SMEs.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://faktum-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
