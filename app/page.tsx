"use client";

import {
  ArrowDown,
  ArrowRight,
  Award,
  Download,
  Eye,
  FileText,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Send,
  Server,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import BackgroundEffects from "../components/BackgroundEffects";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    number: "01",
    title: "CampusConnect",
    category: "FULL-STACK PLATFORM",
    description:
      "A full-stack campus management platform connecting students, faculty and administrators through role-based workflows, attendance, clubs, events, approvals, notifications and authentication.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "JWT",
    ],
    github: "https://github.com/VIVEK6480/campusconnect",
    liveDemo: "https://campusconnect-coral-one.vercel.app/",
    featured: true,
  },

  {
    number: "02",
    title: "Emotion Detection System",
    category: "AI / COMPUTER VISION",
    description:
      "A real-time webcam-based facial emotion detection system using computer vision and deep learning to classify human emotions.",
    stack: [
      "Python",
      "OpenCV",
      "DeepFace",
      "TensorFlow",
      "NumPy",
      "Pandas",
    ],
    github: "https://github.com/VIVEK6480/Emotion-Detection",
    featured: true,
  },

  {
    number: "03",
    title: "Firewall Implementation",
    category: "NETWORK SECURITY",
    description:
      "A security-focused networking project currently being developed and documented as part of the portfolio engineering work.",
    stack: [
      "Networking",
      "Security",
      "Firewall",
      "Systems",
    ],
    github: null,
    featured: false,
  },

  {
    number: "04",
    title: "Data Quality & Observability",
    category: "DATA ENGINEERING / AI",
    description:
      "Planned industrial platform focused on automated data-quality checks, observability signals, anomaly detection and reliable data pipelines.",
    stack: [
      "Python",
      "Data Engineering",
      "Observability",
      "AI/ML",
    ],
    github: null,
    featured: false,
  },

  {
    number: "05",
    title: "AI E-Commerce Platform",
    category: "AI / FULL-STACK",
    description:
      "Planned AI-powered commerce platform exploring intelligent product discovery, personalized experiences and modern full-stack architecture.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "AI",
      "PostgreSQL",
    ],
    github: null,
    featured: false,
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Authentication",
      "RBAC",
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Neon Database",
      "MySQL",
      "SQL",
    ],
  },

  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "DeepFace",
      "TensorFlow",
      "OpenCV",
    ],
  },

  {
    title: "Languages",
    icon: Code2,
    skills: [
      "C++",
      "C",
      "Python",
      "JavaScript",
      "PHP",
    ],
  },

  {
    title: "Tools",
    icon: Terminal,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "npm",
    ],
  },
];

/* =========================================================
   TOOL / PLATFORM ICONS
========================================================= */

const skillIcons: Record<string, string> = {
  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg",
  "REST APIs":
    "/skills/rest-apis.svg",
  JWT:
    "/skills/jwt.svg",
  bcrypt:
    "/skills/bcrypt.svg",
  Authentication:
    "/skills/authentication.svg",
  RBAC:
    "/skills/rbac.svg",

  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Prisma ORM":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "Neon Database":
    "/skills/neon-database.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  SQL:
    "/skills/sql.svg",

  "Artificial Intelligence":

    "/skills/artificial-intelligence.svg",
  "Machine Learning":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Computer Vision":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  DeepFace:
    "/skills/deepface.svg",
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  OpenCV:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",

  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  C:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  PHP:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",

  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Vercel:
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg",
  Render:
    "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/render.svg",
  npm:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
};

/* =========================================================
   PROGRAMMING LANGUAGES
========================================================= */

const programmingLanguages = [
  {
    name: "C++",
    level: "Proficient",
    description:
      "Strong foundation in problem solving, DSA and object-oriented programming.",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    accent: "from-blue-400/20 to-cyan-400/5",
  },
  {
    name: "C",
    level: "Working Knowledge",
    description:
      "Programming fundamentals, memory concepts and structured programming.",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    accent: "from-slate-400/20 to-blue-400/5",
  },
  {
    name: "Python",
    level: "Working Knowledge",
    description:
      "Used for AI, computer vision, data processing and automation projects.",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    accent: "from-yellow-400/20 to-blue-400/5",
  },
  {
    name: "JavaScript",
    level: "Working Knowledge",
    description:
      "Modern web development with React, Next.js, Node.js and REST APIs.",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    accent: "from-yellow-300/20 to-orange-400/5",
  },
  {
    name: "PHP",
    level: "Working Knowledge",
    description:
      "Backend and web-development fundamentals with server-side programming.",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    accent: "from-purple-400/20 to-indigo-400/5",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    year: "2026",
    role: "Virtual AI Intern",
    company: "Infosys Springboard",
    description:
      "Selected for Infosys Springboard Virtual Internship 7.0 with structured learning and practical exposure across AI, machine learning and data-oriented problem solving.",
  },

  {
    year: "2025",
    role: "MERN Stack Developer",
    company: "Codec Technologies Pvt. Ltd.",
    description:
      "Worked remotely on full-stack development and contributed to campus-management product development using modern JavaScript technologies and REST APIs.",
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech — Computer Science & Engineering",
    institute: "COER University, Roorkee",
    result: "CGPA 8.63",
  },

  {
    period: "2020 — 2022",
    degree: "Senior Secondary — PCMB",
    institute: "K S College, Ara",
    result: "61.8%",
  },

  {
    period: "2019 — 2020",
    degree: "Matriculation",
    institute: "B.D. Public School, Ara",
    result: "63.2%",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    title: "Oracle Data Platform Certified Foundations Associate",
    date: "September 2025",
  },

  {
    title: "Internal Hackathon 4.0 — Participation",
    date: "March 2025",
  },

  {
    title: "Computing Fest by IITians — Achievement",
    date: "March 2024",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  ["100+", "DSA Problems"],
  ["30+", "REST APIs"],
  ["10+", "Campus Modules"],
  ["8.63", "Current CGPA"],
];

/* =========================================================
   REUSABLE ANIMATION
========================================================= */

const revealInitial = {
  opacity: 0,
  y: 35,
};

const revealVisible = {
  opacity: 1,
  y: 0,
};

const revealTransition = {
  duration: 0.65,
};

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        // Always show the navbar at the very top.
        if (currentScrollY <= 24) {
          setShowNavbar(true);
        } else if (currentScrollY > previousScrollY + 4) {
          // Scrolling down: hide it so it never covers section content.
          setShowNavbar(false);
          setMobileOpen(false);
        } else if (currentScrollY < previousScrollY - 4) {
          // Scrolling up: bring it back.
          setShowNavbar(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, -100]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0]
  );

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Languages", "#languages"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* =====================================================
          GLOBAL EFFECTS
      ===================================================== */}

      <BackgroundEffects />
      <CustomCursor />
      <ScrollProgress />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${
          showNavbar ? "translate-y-0" : "-translate-y-[130%]"
        }`}
      >
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">

          <nav className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <Link
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10"
                >
                  <span className="text-sm font-bold text-cyan-300">
                    VK
                  </span>
                </motion.div>

                <div className="hidden sm:block">
                  <p className="text-sm font-semibold tracking-wide">
                    VIVEK KUMAR
                  </p>

                  <p className="text-[10px] tracking-[0.25em] text-white/40">
                    SOFTWARE ENGINEER
                  </p>
                </div>
              </Link>

              {/* DESKTOP */}

              <div className="hidden items-center gap-7 md:flex">
                {navItems.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="group relative text-xs font-medium text-white/55 transition-colors hover:text-cyan-300"
                  >
                    {label}

                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* RESUME */}

              <a
                href="/resume/Vivek-Kumar-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 md:flex"
              >
                <FileText size={14} />
                Resume
              </a>

              {/* SOCIAL */}

              <div className="hidden items-center gap-2 md:flex">

                <motion.a
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  href="https://github.com/VIVEK6480"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                >
                  <span className="text-[10px] font-bold">
                    GH
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  href="https://www.linkedin.com/in/vivek-kumar-7162272b3"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                >
                  <span className="text-[11px] font-bold">
                    in
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.04,
                  }}
                  href="mailto:2003kumarvivek@gmail.com"
                  className="ml-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cyan-300"
                >
                  Let's Talk
                </motion.a>

              </div>

              {/* MOBILE */}

              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() =>
                  setMobileOpen((value) => !value)
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                      }}
                    >
                      <X size={19} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                      }}
                    >
                      <Menu size={19} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

            </div>

            {/* MOBILE MENU */}

            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="mt-4 space-y-1 border-t border-white/10 pt-3">

                    {navItems.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className="block rounded-xl px-3 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}

                    <a
                      href="/resume/Vivek-Kumar-Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-3 text-sm font-semibold text-cyan-200"
                    >
                      <FileText size={16} />
                      View Resume
                    </a>

                    <a
                      href="mailto:2003kumarvivek@gmail.com"
                      className="mt-2 block rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-black"
                    >
                      Let's Talk
                    </a>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >

        <div className="absolute inset-0 bg-[#050505]/80" />

        <div className="hero-grid absolute inset-0 opacity-70" />

        {/* atmosphere */}

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
          }}
          className="absolute right-[-10%] top-[20%] h-[550px] w-[550px] rounded-full bg-purple-500/10 blur-[150px]"
        />

        {/* particles */}

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute left-[15%] top-[28%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_30px_8px_rgba(34,211,238,0.35)]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
          }}
          className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_25px_7px_rgba(168,85,247,0.35)]"
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-[48%] top-[18%] h-1 w-1 rounded-full bg-white"
        />

        {/* content */}

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8"
        >

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">

            {/* LEFT */}

            <div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
              >

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>

                <span className="text-xs font-medium tracking-wide text-cyan-300">
                  AVAILABLE FOR OPPORTUNITIES
                </span>

              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.6,
                }}
                className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/35"
              >
                Hello, I&apos;m
              </motion.p>

              {/* NAME */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.8,
                }}
                className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[92px]"
              >
                Vivek
                <br />

                <span className="hero-gradient">
                  Kumar.
                </span>
              </motion.h1>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}
                className="mt-8 flex items-center gap-3"
              >

                <motion.div
                  animate={{
                    width: [48, 80, 48],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="h-px bg-cyan-400"
                />

                <p className="text-sm font-medium text-white/70 sm:text-base">
                  Full Stack Developer
                  <span className="mx-2 text-white/20">
                    /
                  </span>
                  AI Engineer
                </p>

              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg"
              >
                I build scalable digital products, intelligent
                systems and modern web applications with a focus
                on clean architecture, real-world functionality
                and exceptional user experience.
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="mt-9 flex flex-wrap gap-3"
              >

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="#projects"
                  className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition hover:bg-cyan-300"
                >
                  Explore Projects

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="/resume/Vivek-Kumar-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/5 px-5 py-3.5 text-sm font-semibold text-cyan-200 backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
                >
                  <Eye size={16} />
                  View Resume
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="/resume/Vivek-Kumar-Resume.pdf"
                  download="Vivek-Kumar-Resume.pdf"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white/75 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  href="mailto:2003kumarvivek@gmail.com"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white/80 backdrop-blur transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                >
                  <Mail size={16} />
                  Contact Me
                </motion.a>

              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                }}
                className="mt-9 flex flex-wrap items-center gap-5 text-xs text-white/35"
              >

                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  Haridwar, Uttarakhand
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span>
                  100+ DSA Problems
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span>
                  8.63 CGPA
                </span>

              </motion.div>

            </div>

            {/* PROFILE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="relative mx-auto w-full max-w-md lg:ml-auto"
            >

              <motion.div
                animate={{
                  rotate: [0, 1, 0, -1, 0],
                  y: [0, -6, 0, 6, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
                className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl">

                <div className="scan-line z-20" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-gradient-to-br from-cyan-950/50 via-[#0a0a0a] to-purple-950/40">

                  {!profileImageError ? (
                    <motion.img
                      initial={{
                        scale: 1.08,
                      }}
                      animate={{
                        scale: [1.08, 1.03, 1.08],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                      }}
                      src="/profile/vivek-kumar.png"
                      alt="Vivek Kumar"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      onError={() =>
                        setProfileImageError(true)
                      }
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="text-center">

                        <motion.div
                          animate={{
                            scale: [1, 1.06, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                          className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.12)]"
                        >
                          <span className="text-5xl font-bold text-cyan-300">
                            VK
                          </span>
                        </motion.div>

                        <p className="mt-6 text-sm font-semibold">
                          Vivek Kumar
                        </p>

                        <p className="mt-2 text-xs text-white/35">
                          Full Stack Developer
                        </p>

                      </div>

                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">

                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl"
                    >

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-xs text-white/40">
                            CURRENT FOCUS
                          </p>

                          <p className="mt-1 text-sm font-semibold">
                            Full Stack + AI
                          </p>
                        </div>

                        <motion.div
                          animate={{
                            rotate: [0, 15, -15, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                        >
                          <Sparkles
                            size={20}
                            className="text-cyan-300"
                          />
                        </motion.div>

                      </div>

                    </motion.div>

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-2 p-2">

                  {[
                    ["100+", "DSA"],
                    ["30+", "APIs"],
                    ["10+", "Modules"],
                  ].map(([value, label]) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="rounded-xl border border-white/5 bg-white/[0.025] p-3 text-center"
                    >
                      <p className="text-sm font-bold">
                        {value}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
                        {label}
                      </p>
                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-20 flex items-center justify-center"
          >

            <a
              href="#about"
              className="flex flex-col items-center gap-3 text-white/25 transition hover:text-cyan-300"
            >
              <span className="text-[9px] uppercase tracking-[0.35em]">
                Scroll to explore
              </span>

              <motion.span
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              >
                <ArrowDown size={16} />
              </motion.span>
            </a>

          </motion.div>

        </motion.div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative border-y border-white/5 bg-white/[0.015]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 sm:grid-cols-4 lg:px-8">

          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className={`px-5 py-4 ${
                index !== 0
                  ? "border-l border-white/5"
                  : ""
              }`}
            >

              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {value}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                {label}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative py-28 sm:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={revealTransition}
            className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                01 / About
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Building with
                <br />
                <span className="text-white/30">
                  purpose.
                </span>
              </h2>

            </div>

            <div>

              <p className="text-xl leading-9 text-white/75 sm:text-2xl">
                I&apos;m a Computer Science Engineering student
                focused on full-stack development, backend
                architecture and applied artificial intelligence.
              </p>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/40">
                My work combines modern web technologies with
                practical engineering principles. I enjoy turning
                complex requirements into structured systems that
                are reliable, scalable and easy to maintain.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">

                {[
                  "Scalable application architecture",
                  "Role-based authentication systems",
                  "REST API development",
                  "AI & computer vision",
                  "Database-driven applications",
                  "Modern responsive interfaces",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4"
                  >

                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-cyan-300"
                    />

                    <span className="text-sm text-white/55">
                      {item}
                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="border-y border-white/5 bg-[#070707] py-28 sm:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
            }}
            transition={revealTransition}
          >

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              02 / Technical Stack
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Tools I use to
                <br />
                <span className="text-white/30">
                  ship products.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/35">
                A practical stack covering frontend engineering,
                backend systems, databases, AI/ML and developer
                tooling.
              </p>

            </div>

          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {skillGroups.map((group, index) => {

              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.015,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/[0.025] p-6 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/15" />

                  <div className="relative flex items-center justify-between">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                      <Icon
                        size={18}
                        className="text-cyan-300"
                      />

                    </div>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3 className="relative mt-6 flex items-center gap-2 text-lg font-semibold">
                    {group.title}

                    {group.title === "Tools" && (
                      <span className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-cyan-300/60">
                        Toolbox
                      </span>
                    )}
                  </h3>

                  <div className="relative mt-5">
                    <div className="grid grid-cols-2 gap-2.5">
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{
                            y: -4,
                            scale: 1.02,
                          }}
                          className="group/tool relative flex min-h-[82px] items-center gap-3 overflow-hidden rounded-xl border border-white/7 bg-black/25 px-3 py-3 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-cyan-400/[0.025] opacity-0 transition-opacity duration-300 group-hover/tool:opacity-100" />

                          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] p-2 transition-all duration-300 group-hover/tool:border-cyan-400/25 group-hover/tool:bg-white/[0.07]">
                            <img
                              src={skillIcons[skill]}
                              alt={`${skill} logo`}
                              loading="lazy"
                              className="h-full w-full object-contain"
                            />
                          </div>

                          <div className="relative min-w-0">
                            <p className="truncate text-[11px] font-semibold text-white/70 transition-colors group-hover/tool:text-white">
                              {skill}
                            </p>

                            <p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-white/25">
                              {group.title}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROGRAMMING LANGUAGES
      ===================================================== */}

      <section
        id="languages"
        className="relative overflow-hidden border-y border-white/5 bg-white/[0.012] py-28 sm:py-36"
      >
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={revealTransition}
            className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                03 / Languages
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Languages I
                <br />
                <span className="text-white/30">
                  work with.
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                A focused set of programming languages used across
                software development, problem solving, web applications,
                backend systems and AI-oriented projects.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {programmingLanguages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-cyan-400/30 hover:bg-white/[0.045]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${language.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3 shadow-xl transition duration-500 group-hover:scale-110 group-hover:border-cyan-400/30">
                      <img
                        src={language.icon}
                        alt={`${language.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {language.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/70">
                    {language.level}
                  </p>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/40">
                    {language.description}
                  </p>

                  <div className="mt-5 h-px w-full bg-white/5" />

                  <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-white/25">
                    <span>Programming</span>

                    <Code2
                      size={13}
                      className="text-cyan-300/50 transition group-hover:text-cyan-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="py-28 sm:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
            }}
            transition={revealTransition}
          >

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              03 / Experience
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              Experience &
              <br />
              <span className="text-white/30">
                growth.
              </span>
            </h2>

          </motion.div>

          <div className="relative mt-16">

            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

            <div className="space-y-12">

              {experience.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative pl-10"
                >

                  <motion.div
                    animate={{
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index,
                    }}
                    className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#050505]"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-300" />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="grid gap-6 rounded-2xl border border-white/7 bg-white/[0.02] p-6 transition hover:border-cyan-400/15 sm:p-8 lg:grid-cols-[180px_1fr]"
                  >

                    <div>

                      <p className="text-sm font-semibold text-cyan-300">
                        {item.year}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/25">
                        {item.company}
                      </p>

                    </div>

                    <div>

                      <div className="flex items-center gap-3">

                        <BriefcaseBusiness
                          size={17}
                          className="text-white/40"
                        />

                        <h3 className="text-xl font-semibold">
                          {item.role}
                        </h3>

                      </div>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="border-y border-white/5 bg-[#070707] py-28 sm:py-36"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
            }}
            transition={revealTransition}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                04 / Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                Projects that
                <br />
                <span className="text-white/30">
                  solve problems.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              From campus platforms to computer vision systems,
              each project focuses on practical engineering and
              functionality.
            </p>

          </motion.div>

          <div className="mt-16 space-y-5">

            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                whileHover={{
                  x: 6,
                  scale: 1.005,
                }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all sm:p-8 ${
                  project.featured
                    ? "border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.055] to-transparent"
                    : "border-white/7 bg-white/[0.02]"
                }`}
              >

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/15" />

                <div className="absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative grid gap-8 lg:grid-cols-[90px_1fr_260px] lg:items-center">

                  <div>
                    <span className="font-mono text-sm text-cyan-300/60">
                      {project.number}
                    </span>
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full border border-white/7 bg-white/5 px-3 py-1 text-[9px] font-semibold tracking-[0.2em] text-white/35">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[9px] font-semibold tracking-[0.2em] text-cyan-300">
                          FEATURED
                        </span>
                      )}

                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] text-white/25 transition group-hover:text-white/40"
                        >
                          #{tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">

                    {project.github ? (
                      <motion.a
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-medium text-white/55 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                      >
                        <span className="text-[10px] font-bold">
                          GH
                        </span>

                        GitHub

                        <ExternalLink size={12} />
                      </motion.a>
                    ) : null}

                    {project.liveDemo ? (
                      <motion.a
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100"
                      >
                        <span className="text-[10px] font-bold">
                          LIVE
                        </span>

                        Live Demo

                        <ExternalLink size={12} />
                      </motion.a>
                    ) : !project.github ? (
                      <span className="rounded-xl border border-white/7 px-4 py-3 text-xs text-white/25">
                        Coming Soon
                      </span>
                    ) : null}

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ENGINEERING
      ===================================================== */}

      <section className="py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
            }}
            transition={revealTransition}
            className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                05 / Engineering
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                How I
                <br />
                <span className="text-white/30">
                  build.
                </span>
              </h2>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                {
                  icon: Network,
                  title: "Architecture",
                  text: "Modular and maintainable application structures.",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  text: "Fast interfaces and efficient backend workflows.",
                },
                {
                  icon: Code2,
                  title: "Clean Code",
                  text: "Reusable components and predictable code patterns.",
                },
                {
                  icon: BrainCircuit,
                  title: "AI Integration",
                  text: "Practical AI and computer vision applications.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.015,
                    }}
                    className="rounded-2xl border border-white/7 bg-white/[0.025] p-6 transition hover:border-cyan-400/20"
                  >

                    <Icon
                      size={20}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-6 font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          EDUCATION + CERTIFICATIONS
      ===================================================== */}

      <section className="border-y border-white/5 bg-[#070707] py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* EDUCATION */}

            <motion.div
              initial={revealInitial}
              whileInView={revealVisible}
              viewport={{
                once: true,
              }}
              transition={revealTransition}
            >

              <div className="flex items-center gap-3">

                <GraduationCap
                  size={20}
                  className="text-cyan-300"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Education
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em]">
                Academic
                <br />
                <span className="text-white/30">
                  foundation.
                </span>
              </h2>

              <div className="mt-10 space-y-4">

                {education.map((item, index) => (
                  <motion.div
                    key={item.institute}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="rounded-2xl border border-white/7 bg-white/[0.025] p-5"
                  >

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span className="text-xs text-cyan-300">
                        {item.period}
                      </span>

                      <span className="text-xs text-white/30">
                        {item.result}
                      </span>

                    </div>

                    <h3 className="mt-4 font-semibold">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-sm text-white/35">
                      {item.institute}
                    </p>

                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* CERTIFICATIONS */}

            <motion.div
              initial={revealInitial}
              whileInView={revealVisible}
              viewport={{
                once: true,
              }}
              transition={revealTransition}
            >

              <div className="flex items-center gap-3">

                <Award
                  size={20}
                  className="text-cyan-300"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Certifications
                </p>

              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em]">
                Credentials &
                <br />
                <span className="text-white/30">
                  achievements.
                </span>
              </h2>

              <div className="mt-10 space-y-4">

                {certifications.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: -5,
                    }}
                    className="group rounded-2xl border border-white/7 bg-white/[0.025] p-5 transition hover:border-cyan-400/20"
                  >

                    <div className="flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/5 text-cyan-300">
                        <Award size={17} />
                      </div>

                      <div>

                        <h3 className="text-sm font-semibold leading-6">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs text-white/30">
                          {item.date}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RESUME
      ===================================================== */}

      <section
        id="resume"
        className="relative py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={revealTransition}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] p-8 sm:p-12 lg:p-16"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                    <FileText
                      size={20}
                      className="text-cyan-300"
                    />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Resume
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                  Explore my
                  <br />
                  <span className="text-white/30">
                    professional profile.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
                  View my complete resume for my education, experience,
                  projects, technical skills, certifications and
                  achievements.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/resume/Vivek-Kumar-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <Eye size={17} />
                    View Resume
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="/resume/Vivek-Kumar-Resume.pdf"
                    download="Vivek-Kumar-Resume.pdf"
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white/75 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                  >
                    <Download
                      size={17}
                      className="transition-transform group-hover:-translate-y-1"
                    />
                    Download PDF
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="absolute -inset-5 rounded-[30px] bg-cyan-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-3 shadow-2xl">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <FileText
                          size={17}
                          className="text-cyan-300"
                        />

                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                          PDF
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-center px-6">
                        <div className="h-2 w-24 rounded-full bg-white/20" />
                        <div className="mt-3 h-1.5 w-32 rounded-full bg-white/10" />

                        <div className="mt-8 space-y-3">
                          <div className="h-1.5 w-full rounded-full bg-white/10" />
                          <div className="h-1.5 w-[85%] rounded-full bg-white/10" />
                          <div className="h-1.5 w-[92%] rounded-full bg-white/10" />
                          <div className="h-1.5 w-[72%] rounded-full bg-white/10" />
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                          <div className="h-16 rounded-lg border border-white/5 bg-white/[0.025]" />
                          <div className="h-16 rounded-lg border border-white/5 bg-white/[0.025]" />
                        </div>

                        <div className="mt-4 h-20 rounded-lg border border-white/5 bg-white/[0.025]" />
                      </div>

                      <div className="border-t border-white/10 px-4 py-3">
                        <p className="text-center text-[8px] uppercase tracking-[0.2em] text-white/20">
                          Vivek Kumar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden py-32 sm:py-44"
      >

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            initial={revealInitial}
            whileInView={revealVisible}
            viewport={{
              once: true,
            }}
            transition={revealTransition}
          >

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              06 / Contact
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Let&apos;s build
              <br />

              <span className="hero-gradient">
                something.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/40">
              Have a project, opportunity or idea? I&apos;m open
              to conversations around software engineering,
              full-stack development and AI.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="mailto:2003kumarvivek@gmail.com"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                <Send size={16} />
                Send an Email
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                href="https://www.linkedin.com/in/vivek-kumar-7162272b3"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:border-cyan-400/30 hover:text-white"
              >
                <span className="text-[11px] font-bold">
                  in
                </span>

                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                href="https://github.com/VIVEK6480"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:border-cyan-400/30 hover:text-white"
              >
                <span className="text-[10px] font-bold">
                  GH
                </span>

                GitHub
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                href="https://leetcode.com/u/6XsVSxqk70/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:border-cyan-400/30 hover:text-white"
              >
                <span className="text-[10px] font-bold">
                  LC
                </span>

                LeetCode
              </motion.a>

            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-white/25">

              <span className="flex items-center gap-2">
                <Mail size={13} />
                2003kumarvivek@gmail.com
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <span className="flex items-center gap-2">
                <Phone size={13} />
                +91 7281920282
              </span>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 bg-[#030303]">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <div>

            <p className="text-sm font-semibold">
              Vivek Kumar
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/20">
              Full Stack Developer / AI Engineer
            </p>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/VIVEK6480"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/30 transition hover:text-white"
            >
              <span className="text-[10px] font-bold">
                GH
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/vivek-kumar-7162272b3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/30 transition hover:text-white"
            >
              <span className="text-[11px] font-bold">
                in
              </span>
            </a>

            <a
              href="https://leetcode.com/u/6XsVSxqk70/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="text-white/30 transition hover:text-white"
            >
              <span className="text-[10px] font-bold">
                LC
              </span>
            </a>

            <a
              href="/resume/Vivek-Kumar-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="text-white/30 transition hover:text-cyan-300"
            >
              <FileText size={17} />
            </a>

            <a
              href="mailto:2003kumarvivek@gmail.com"
              aria-label="Email"
              className="text-white/30 transition hover:text-white"
            >
              <Mail size={17} />
            </a>

          </div>

          <p className="text-[10px] text-white/20">
            © {new Date().getFullYear()} Vivek Kumar. Built with
            Next.js.
          </p>

        </div>

      </footer>

    </main>
  );
}