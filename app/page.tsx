"use client";

import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, Check, Copy, Download, Eye, FileText,
  BriefcaseBusiness, BrainCircuit, Code2, Database, GraduationCap, Mail, Monitor, Server, Terminal, MapPin, Menu, Phone, X,
} from "lucide-react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";


/* ======================= DATA ======================= */

const EMAIL = "2003kumarvivek@gmail.com";
const RESUME = "/resume/Vivek-Kumar-Resume.pdf";
const GITHUB = "https://github.com/VIVEK6480";
const LINKEDIN = "https://www.linkedin.com/in/vivek-kumar-7162272b3";
const LEETCODE = "https://leetcode.com/u/6XsVSxqk70/";

const navItems = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

const stats = [
  ["8.63", "CGPA, B.Tech CSE"],
  ["100+", "DSA problems solved"],
  ["30+", "REST APIs built"],
  ["3", "Internships"],
] as const;

/* Flagship case study */
const flagship = {
  title: "Automated Data Quality & Observability Platform",
  summary:
    "Upload a dataset and get a full health report: what is broken, what changed since last time, and the most likely cause. Built like an internal data-platform tool, not a notebook.",
  github:
    "https://github.com/VIVEK6480/Automated-Data-Quality-and-Data-Observability-Platform",
  pipeline: [
    ["Ingest", "CSV upload, schema captured and versioned in PostgreSQL"],
    ["Profile", "Nulls, duplicates, ranges, types and distributions per column"],
    ["Detect", "ML anomaly detection, schema drift and data drift against a baseline"],
    ["Score", "Timeliness and quality scoring for each dataset run"],
    ["Explain", "Root-cause report so issues can be fixed, not just flagged"],
  ],
  stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Pandas", "scikit-learn"],
};

const projects = [
  {
    title: "CampusConnect",
    kind: "Full-stack platform",
    description:
      "Campus management system for students, faculty and admins: role-based access, attendance, clubs, events, approvals and notifications.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Tailwind"],
    github: "https://github.com/VIVEK6480/campusconnect",
    live: "https://campusconnect-coral-one.vercel.app/",
  },
  {
    title: "NotesHub",
    kind: "Full-stack app",
    description:
      "Private notes workspace with secure login. Every user sees and manages only their own notes.",
    stack: ["Next.js", "Node.js", "REST APIs", "Auth", "Tailwind"],
    github: "https://github.com/VIVEK6480/NotesHub",
    live: "https://notes-hub-frontend-eight.vercel.app",
  },
  {
    title: "Emotion Detection System",
    kind: "Computer vision",
    description:
      "Reads webcam frames in real time and classifies facial emotions with a deep learning model.",
    stack: ["Python", "OpenCV", "DeepFace", "TensorFlow", "NumPy"],
    github: "https://github.com/VIVEK6480/Emotion-Detection",
    live: null,
  },
  {
    title: "Firewall Implementation",
    kind: "Network security · in progress",
    description:
      "Packet-filtering firewall project. Rules, logging and documentation are being written up.",
    stack: ["Networking", "Security", "Systems"],
    github: null,
    live: null,
  },
];

const skillGroups: { title: string; skills: string[] }[] = [
  { title: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Python", "REST APIs", "JWT", "RBAC"] },
  { title: "Data & Databases", skills: ["PostgreSQL", "Prisma ORM", "MySQL", "SQL", "Neon Database"] },
  { title: "AI / ML", skills: ["Machine Learning", "Computer Vision", "TensorFlow", "OpenCV", "DeepFace"] },
  { title: "Languages", skills: ["C++", "C", "Python", "JavaScript", "PHP"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"] },
];

const groupIcons: Record<string, typeof Monitor> = {
  Frontend: Monitor,
  Backend: Server,
  "Data & Databases": Database,
  "AI / ML": BrainCircuit,
  Languages: Code2,
  Tools: Terminal,
};

const dv = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const skillIcons: Record<string, string> = {
  "React.js": `${dv}/react/react-original.svg`,
  "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg",
  TypeScript: `${dv}/typescript/typescript-original.svg`,
  JavaScript: `${dv}/javascript/javascript-original.svg`,
  HTML: `${dv}/html5/html5-original.svg`,
  CSS: `${dv}/css3/css3-original.svg`,
  "Tailwind CSS": `${dv}/tailwindcss/tailwindcss-original.svg`,
  "Node.js": `${dv}/nodejs/nodejs-original.svg`,
  "Express.js": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg",
  "REST APIs": "/skills/rest-apis.svg",
  JWT: "/skills/jwt.svg",
  RBAC: "/skills/rbac.svg",
  PostgreSQL: `${dv}/postgresql/postgresql-original.svg`,
  "Prisma ORM": `${dv}/prisma/prisma-original.svg`,
  "Neon Database": "/skills/neon-database.svg",
  MySQL: `${dv}/mysql/mysql-original.svg`,
  SQL: "/skills/sql.svg",
  "Machine Learning": `${dv}/tensorflow/tensorflow-original.svg`,
  "Computer Vision": `${dv}/opencv/opencv-original.svg`,
  TensorFlow: `${dv}/tensorflow/tensorflow-original.svg`,
  OpenCV: `${dv}/opencv/opencv-original.svg`,
  DeepFace: "/skills/deepface.svg",
  "C++": `${dv}/cplusplus/cplusplus-original.svg`,
  C: `${dv}/c/c-original.svg`,
  Python: `${dv}/python/python-original.svg`,
  PHP: `${dv}/php/php-original.svg`,
  Git: `${dv}/git/git-original.svg`,
  GitHub: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
  "VS Code": `${dv}/vscode/vscode-original.svg`,
  Postman: `${dv}/postman/postman-original.svg`,
  Vercel: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg",
  Render: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/render.svg",
};

const experience = [
  {
    when: "Oct 2026 – Present",
    status: "ongoing",
    mode: "Virtual internship",
    role: "Virtual AI Intern",
    org: "Infosys Springboard",
    text: "Currently working through Infosys Springboard Virtual Internship 7.0, a structured programme on AI, machine learning and data problem solving.",
    points: [
      "Selected for Virtual Internship 7.0 and started in October 2026.",
      "Learning AI and machine learning concepts through guided modules.",
      "Applying them in hands-on, data-oriented problem-solving tasks.",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Data Problem Solving"],
  },
  {
    when: "Oct 2026",
    status: "done",
    mode: "",
    role: "Full Stack Developer Intern",
    org: "InCodeVision",
    text: "Worked as a full-stack developer intern and completed the internship in October 2026.",
    points: [
      "Worked across the front end, back end and database layers of the product.",
      "Built and shipped features end to end as part of a development team.",
      "Completed the internship in October 2026.",
    ],
    tags: ["Full Stack Development", "Front End", "Back End", "Databases"],
  },
  {
    when: "2025",
    status: "done",
    mode: "Remote",
    role: "MERN Stack Developer Intern",
    org: "Codec Technologies Pvt. Ltd.",
    text: "Worked remotely on full-stack development and contributed to a campus-management product using modern JavaScript technologies and REST APIs.",
    points: [
      "Worked remotely with a development team on a live product.",
      "Contributed to the campus-management product using modern JavaScript.",
      "Built and consumed REST APIs between the React front end and Node.js back end.",
    ],
    tags: ["React", "Node.js", "REST APIs", "MERN"],
  },
];

const education = [
  { when: "2023 – 2027", title: "B.Tech, Computer Science & Engineering", org: "COER University, Roorkee", result: "CGPA 8.63" },
  { when: "2020 – 2022", title: "Senior Secondary (PCMB)", org: "K S College, Ara", result: "61.8%" },
  { when: "2019 – 2020", title: "Matriculation", org: "B.D. Public School, Ara", result: "63.2%" },
];

const certifications = [
  ["Oracle Data Platform Certified Foundations Associate", "September 2025"],
  ["Internal Hackathon 4.0, participant", "March 2025"],
  ["Computing Fest by IITians, achievement", "March 2024"],
];

/* ======================= HELPERS ======================= */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 block h-[3px] w-16 origin-left rounded bg-gradient-to-r from-cyan-400 to-purple-500"
      />
      {sub && <p className="mt-4 text-base leading-7 text-white/45">{sub}</p>}
    </Reveal>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/60 transition hover:border-cyan-400/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
    >
      {children}
    </a>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-white/75 transition hover:border-cyan-400/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
    >
      {copied ? <Check size={16} className="text-cyan-300" /> : <Copy size={16} />}
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
        }
      },
      del ? 40 : 85
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="font-mono text-cyan-300">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-300" />
    </span>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState("0");
  const num = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const decimals = value.includes(".") ? 2 : 0;
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, num, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setShown(v.toFixed(decimals)) });
    return () => c.stop();
  }, [inView, num, decimals]);
  return <span ref={ref}>{shown}{suffix}</span>;
}

const spot = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/* ======================= GLOBAL STYLES (inline, no globals.css needed) ======================= */

const GLOBAL_CSS = `.hero-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}
html { scroll-behavior: smooth; }
.vk-grad { background: linear-gradient(90deg,#22d3ee,#a78bfa,#f0abfc,#22d3ee); background-size: 300% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent;
  animation: vk-grad 5s linear infinite; }
@keyframes vk-grad { to { background-position: 300% center; } }
@keyframes vk-marquee { to { transform: translateX(-50%); } }
.vk-marquee { animation: vk-marquee 40s linear infinite; }
.vk-marquee:hover { animation-play-state: paused; }
@keyframes vk-sheen { 0% { transform: translateX(-120%); } 60%,100% { transform: translateX(220%); } }
.vk-sheen { position:absolute; inset:0; width:40%; pointer-events:none;
  background: linear-gradient(100deg, transparent, rgba(255,255,255,.07), transparent);
  animation: vk-sheen 6s ease-in-out infinite; }


/* Scanner sweeping over the profile photo */
.vk-scan {
  position: absolute; left: 0; right: 0; top: 0; height: 90px; z-index: 20;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, rgba(34,211,238,.22) 70%, rgba(34,211,238,.55) 100%);
  border-bottom: 1px solid rgba(103,232,249,.9);
  box-shadow: 0 6px 30px rgba(34,211,238,.45);
  animation: vk-scan 3.6s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes vk-scan {
  0%   { transform: translateY(-100%); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(calc(5 * 100%)); opacity: 0; }
}

/* Mouse-follow spotlight on project cards */
.vk-spot::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(34,211,238,.14), transparent 60%);
  opacity: 0; transition: opacity .3s;
}
.vk-spot:hover::before { opacity: 1; }

/* Rotating gradient ring around the photo */
@keyframes vk-spin { to { transform: rotate(360deg); } }
.vk-ring { animation: vk-spin 8s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  .vk-scan, .vk-ring, .vk-marquee, .vk-sheen, .vk-grad { animation: none; }
}
`;

function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}

/* ======================= SCROLL PROGRESS ======================= */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-purple-500"
    />
  );
}

/* ======================= BACKGROUND EFFECTS ======================= */

type P = { x: number; y: number; vx: number; vy: number; r: number };

function BackgroundEffects() {
  const ref = useRef<HTMLCanvasElement>(null);
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    const packets: { a: number; b: number; t: number }[] = [];
    let w = 0, h = 0, raf = 0, pts: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(100, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 140 && d > 0) { p.x += (dx / d) * 0.9; p.y += (dy / d) * 0.9; }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(125,230,255,0.65)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(34,211,238,${0.16 * (1 - d / 120)})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            if (!reduce && packets.length < 14 && Math.random() < 0.0008) packets.push({ a: i, b: j, t: 0 });
          }
        }
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 170) {
          ctx.strokeStyle = `rgba(168,85,247,${0.35 * (1 - md / 170)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      // data packets travelling along links
      for (let k = packets.length - 1; k >= 0; k--) {
        const pk = packets[k];
        pk.t += 0.018;
        const a = pts[pk.a], b = pts[pk.b];
        if (!a || !b || pk.t >= 1) { packets.splice(k, 1); continue; }
        const x = a.x + (b.x - a.x) * pk.t, y = a.y + (b.y - a.y) * pk.t;
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fillStyle = "rgba(34,211,238,0.12)"; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      if (light.current)
        light.current.style.background = `radial-gradient(480px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.10), transparent 60%)`;
    };
    const leave = () => { mouse.x = mouse.y = -9999; };
    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  const grain =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* aurora */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-[6%] h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -110, 0], y: [0, 90, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-[28%] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-180px] left-[30%] h-[460px] w-[620px] rounded-full bg-blue-500/15 blur-[140px]"
      />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
      <div ref={light} className="absolute inset-0" />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: grain }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}

/* ======================= ANIMATED NAME ======================= */

function SplitText({ text, delay = 0, grad = false }: { text: string; delay?: number; grad?: boolean }) {
  return (
    <span aria-hidden className="inline-flex overflow-hidden pb-[0.08em]">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotate: 8, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.06, type: "spring", stiffness: 180, damping: 16 }}
          style={grad ? { animationDelay: `${i * 0.18}s` } : undefined}
          className={`inline-block ${grad ? "vk-grad" : ""}`}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ======================= CURSOR (simple dot + ring) ======================= */

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const style = document.createElement("style");
    style.textContent = "html.vk-cursor, html.vk-cursor * { cursor: none !important; }";
    document.head.appendChild(style);
    document.documentElement.classList.add("vk-cursor");
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) =>
      setHovering(!!(e.target as HTMLElement).closest("a,button,[role=button],input,textarea"));
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("vk-cursor");
      style.remove();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 52 : 30, height: hovering ? 52 : 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="absolute rounded-full border border-cyan-300/60"
      />
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
      />
    </div>
  );
}

/* ======================= INTRO (role based loader) ======================= */

function Intro({ onReveal, onDone }: { onReveal: () => void; onDone: () => void }) {
  const roles = ["Full Stack Developer", "AI / ML Engineer", "Data Engineering Enthusiast"];
  const [idx, setIdx] = useState(0);
  const [pct, setPct] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onReveal();
      onDone();
      return;
    }
    const swap = setInterval(() => setIdx((i) => Math.min(i + 1, roles.length - 1)), 950);
    const c = animate(0, 100, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (v) => setPct(Math.round(v)),
      onComplete: () => {
        setClosing(true);
        setTimeout(onReveal, 350);
        setTimeout(onDone, 1500);
      },
    });
    return () => { clearInterval(swap); c.stop(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ease = [0.76, 0, 0.24, 1] as const;

  return (
    <div className="fixed inset-0 z-[100]">
      <motion.div
        animate={{ y: closing ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease }}
        className="absolute inset-x-0 top-0 h-1/2 bg-[#050505]"
      />
      <motion.div
        animate={{ y: closing ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050505]"
      />
      <motion.div
        animate={{ opacity: closing ? 0 : 1, scale: closing ? 1.06 : 1 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

        <p className="relative font-mono text-xs text-cyan-300/70">
          {"> initializing portfolio"}
          <span className="ml-1 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-cyan-300" />
        </p>

        <div className="relative mt-8 flex min-h-[5.5rem] w-full max-w-xl items-center justify-center text-3xl font-bold tracking-tight sm:min-h-[4rem] sm:text-5xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
              transition={{ duration: 0.35 }}
              className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent"
            >
              {roles[idx]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="relative mt-4 text-sm text-white/40">Vivek Kumar</p>

        <div className="relative mt-10 w-64 sm:w-80">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 font-mono text-xs text-white/40">{String(pct).padStart(3, "0")}%</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ======================= TECH MARQUEE ======================= */

function Marquee() {
  const items = Object.keys(skillIcons).filter((k) => skillIcons[k].startsWith("http"));
  return (
    <div className="overflow-hidden border-b border-white/5 py-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="vk-marquee flex w-max gap-3">
        {[...items, ...items].map((k, i) => (
          <span
            key={`${k}-${i}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={skillIcons[k]} alt="" className={`h-4 w-4 object-contain ${skillIcons[k].includes("simple-icons") ? "brightness-0 invert" : ""}`} />
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ======================= PAGE ======================= */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showIntro]);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y <= 24) setShowNavbar(true);
        else if (y > lastY.current + 4) { setShowNavbar(false); setMobileOpen(false); }
        else if (y < lastY.current - 4) setShowNavbar(true);
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pageContent = (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-white selection:bg-cyan-300/30">
      <BackgroundEffects />
      <CustomCursor />
      <ScrollProgress />

      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-[130%]"
        }`}
      >
        <div className="mx-auto mt-3 max-w-[1800px] px-3 sm:px-5 lg:px-8">
          <nav className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 backdrop-blur-xl sm:px-6">
            <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
              <Link href="#home" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  VK
                </span>
                <span className="hidden text-base font-semibold sm:block">Vivek Kumar</span>
              </Link>

              <div className="hidden items-center gap-10 md:flex md:justify-self-center">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href} className="text-[15px] font-medium text-white/70 transition hover:text-cyan-300">
                    {label}
                  </Link>
                ))}
              </div>

              <div className="hidden items-center gap-2.5 md:flex md:justify-self-end">
                <IconLink href={GITHUB} label="GitHub">GH</IconLink>
                <IconLink href={LINKEDIN} label="LinkedIn">in</IconLink>
                <a
                  href={RESUME}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  <FileText size={14} /> Resume
                </a>
              </div>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
              >
                {mobileOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>

            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="mt-4 space-y-1 border-t border-white/10 pt-3">
                    {navItems.map(([label, href]) => (
                      <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-white/65 hover:bg-white/5">
                        {label}
                      </Link>
                    ))}
                    <a href={RESUME} target="_blank" rel="noreferrer" className="mt-2 block rounded-lg bg-white px-3 py-3 text-center text-sm font-semibold text-black">
                      View resume
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden lg:h-[100svh] lg:min-h-[600px]">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 pb-10 pt-24 lg:px-12">
          <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-[11px] font-medium text-cyan-300 sm:text-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Final-year student · open to roles from 2027
              </motion.p>

              <h1
                aria-label="Vivek Kumar"
                className="font-bold leading-[0.95] tracking-[-0.045em] text-[clamp(2.75rem,min(10vw,15vh),7rem)]"
              >
                <motion.span
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-1 block text-[0.3em] font-medium tracking-normal text-white/40"
                >
                  Hi, I&apos;m
                </motion.span>
                <SplitText text="Vivek" delay={0.2} />
                <br />
                <SplitText text="Kumar" delay={0.5} grad />
              </h1>

              <p className="mt-4 text-base sm:text-xl">
                <span className="text-white/40">{"> "}</span>
                <Typewriter words={["Full Stack Developer", "AI / ML Engineer", "Data Engineering Enthusiast", "Problem Solver"]} />
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base"
              >
                I&apos;m Vivek Kumar, a B.Tech CSE student at COER University. I ship with Next.js, Node.js and
                PostgreSQL, and I work on data quality, observability and computer vision with Python.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a href="#projects" className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                  See my projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href={RESUME} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10">
                  <Eye size={16} /> View resume
                </a>
                <a href={RESUME} download="Vivek-Kumar-Resume.pdf" className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition hover:text-white">
                  <Download size={16} /> Download PDF
                </a>
              </motion.div>

              <p className="mt-5 flex items-center gap-2 text-xs text-white/35">
                <MapPin size={14} /> Haridwar, Uttarakhand, India
              </p>
            </div>

            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:ml-auto lg:mr-0 lg:max-w-[min(26rem,calc(60svh*0.8))]"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-500/15 via-transparent to-purple-500/15 blur-2xl" />
              <div className="absolute -inset-[2px] overflow-hidden rounded-[26px]">
                <div className="vk-ring absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,.9)_60deg,transparent_120deg,rgba(168,85,247,.8)_220deg,transparent_280deg)]" />
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-950/50 via-[#0a0a0a] to-purple-950/40">
                  {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/profile/vivek-kumar.png"
                      alt="Portrait of Vivek Kumar"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-cyan-300">VK</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="vk-scan" />
                  <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-cyan-300/80" />
                  <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-cyan-300/80" />
                  <span className="absolute bottom-24 left-3 h-5 w-5 border-b-2 border-l-2 border-cyan-300/80" />
                  <span className="absolute bottom-24 right-3 h-5 w-5 border-b-2 border-r-2 border-cyan-300/80" />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                    <p className="text-xs text-white/45">Currently building</p>
                    <p className="mt-1 text-sm font-semibold">Data observability platform</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <a href="#proof" aria-label="Scroll down" className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 text-white/25 transition hover:text-cyan-300 lg:block">
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section id="proof" className="border-y border-white/5 bg-white/[0.015]">
        <dl className="mx-auto grid max-w-[1800px] grid-cols-2 px-6 py-4 sm:grid-cols-4 lg:px-12">
          {stats.map(([value, label], i) => (
            <div key={label} className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10 ${i % 2 ? "border-l border-white/5" : ""} ${i > 1 ? "border-t border-white/5 sm:border-t-0" : ""} ${i ? "sm:border-l sm:border-white/5" : "sm:border-l-0"}`}>
              <dd className="text-4xl font-bold tracking-tight sm:text-5xl"><CountUp value={value} /></dd>
              <dt className="mt-2 text-xs text-white/35">{label}</dt>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="mt-4 block h-[2px] w-12 origin-center rounded bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            </div>
          ))}
        </dl>
      </section>

      <Marquee />

      {/* PROJECTS */}
      <section id="projects" className="py-28 sm:py-32">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
          <SectionHead
            title="Projects"
            sub="One deep data-engineering project, plus full-stack and AI work that is deployed and open on GitHub."
          />

          {/* Flagship case study */}
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] to-transparent p-6 sm:p-10">
              <div className="vk-sheen" />
              <p className="text-xs font-semibold text-cyan-300">Flagship project · Data engineering</p>
              <h3 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">{flagship.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">{flagship.summary}</p>

              <ol className="mt-9 grid gap-3 md:grid-cols-5">
                {flagship.pipeline.map(([step, text], i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.45 }}
                    className="rounded-xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="font-mono text-xs text-cyan-300">{i + 1}. {step}</p>
                    <p className="mt-2 text-xs leading-5 text-white/45">{text}</p>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-white/35">{flagship.stack.join("  ·  ")}</p>
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-cyan-300"
                >
                  Read the code <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </Reveal>

          {/* Other projects */}
          <div className="mt-5 grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article onMouseMove={spot} className="vk-spot group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/25 hover:bg-white/[0.04]">
                  <p className="text-xs text-white/35">{p.kind}</p>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/45">{p.description}</p>
                  <p className="mt-5 text-xs text-white/30">{p.stack.join("  ·  ")}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-lg bg-cyan-400/10 px-3.5 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/20">
                        Live demo <ArrowUpRight size={13} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-xs font-medium text-white/60 transition hover:text-white">
                        Source code <ArrowUpRight size={13} />
                      </a>
                    )}
                    {!p.live && !p.github && <span className="text-xs text-white/30">Write-up coming soon</span>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/5 bg-[#070707]/70 py-28 sm:py-32">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
          <SectionHead
            title="Skills"
            sub="The tools I build with, grouped by where they sit in a product."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((g, gi) => {
              const Icon = groupIcons[g.title];
              return (
                <Reveal key={g.title} delay={gi * 0.07} className="h-full">
                  <div
                    onMouseMove={spot}
                    className="vk-spot relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/30 sm:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                          <Icon size={20} />
                        </span>
                        <h3 className="text-lg font-semibold">{g.title}</h3>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                        {g.skills.length} tools
                      </span>
                    </div>

                    <ul className="grid grid-cols-3 gap-3 xl:grid-cols-4">
                      {g.skills.map((sk, si) => (
                        <motion.li
                          key={sk}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.05 + si * 0.05, type: "spring", stiffness: 240, damping: 18 }}
                          whileHover={{ y: -5 }}
                          className="group/tile flex flex-col items-center gap-2.5 rounded-2xl border border-white/10 bg-black/30 px-2 py-4 text-center transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={skillIcons[sk]}
                            alt={`${sk} logo`}
                            loading="lazy"
                            className={`h-9 w-9 object-contain transition-transform duration-300 group-hover/tile:scale-110 ${
                              skillIcons[sk]?.includes("simple-icons") ? "brightness-0 invert" : ""
                            }`}
                          />
                          <span className="text-[11px] font-medium leading-tight text-white/65 group-hover/tile:text-white">
                            {sk}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 sm:py-32">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
          <SectionHead title="Experience" sub="Internships and hands-on work, newest first." />
          <ol className="relative space-y-6 border-l border-white/10 pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.org} delay={i * 0.08}>
                <li className="relative">
                  <span className="absolute -left-[39px] top-9 h-3 w-3 animate-pulse rounded-full border-2 border-cyan-300 bg-[#050505]" />
                  <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-cyan-400/30 sm:p-8 lg:grid-cols-[300px_1fr] lg:gap-10">
                    <div>
                      <p className="flex flex-wrap items-center gap-3 text-xs font-semibold text-cyan-300">
                        {e.when}
                        {e.status === "ongoing" ? (
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            Ongoing
                          </span>
                        ) : (
                          <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/40">Completed</span>
                        )}
                      </p>
                      <h4 className="mt-3 text-lg font-semibold text-white/90">{e.org}</h4>
                      {e.mode && <p className="mt-1 text-xs text-white/35">{e.mode}</p>}
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2.5 text-xl font-semibold sm:text-2xl">
                        <BriefcaseBusiness size={19} className="shrink-0 text-white/40" /> {e.role}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">{e.text}</p>
                      <ul className="mt-4 space-y-2">
                        {e.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-sm leading-6 text-white/55">
                            <Check size={15} className="mt-1 shrink-0 text-cyan-300" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section id="education" className="border-y border-white/5 bg-[#070707]/70 py-28 sm:py-32">
        <div className="mx-auto grid max-w-[1800px] gap-16 px-6 lg:px-12 lg:grid-cols-2">
          <div>
            <SectionHead title="Education" />
            <div className="space-y-4">
              {education.map((e) => (
                <Reveal key={e.org}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="flex items-center gap-2 text-cyan-300"><GraduationCap size={14} /> {e.when}</span>
                      <span className="text-white/40">{e.result}</span>
                    </div>
                    <h3 className="mt-3 font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-white/40">{e.org}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHead title="Certifications" />
            <div className="space-y-4">
              {certifications.map(([title, date]) => (
                <Reveal key={title}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/5 text-cyan-300">
                      <Award size={17} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold leading-6">{title}</h3>
                      <p className="mt-1 text-xs text-white/35">{date}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-32 sm:py-40">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hiring for 2027? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/45">
              I&apos;m looking for a software engineering role in full-stack, backend or data. Email is the fastest way to reach me.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
                <Mail size={16} /> Send an email
              </a>
              <CopyEmail />
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:text-white">
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:text-white">
                GitHub
              </a>
              <a href={LEETCODE} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/70 transition hover:text-white">
                LeetCode
              </a>
            </div>

            <p className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-white/30">
              <span className="flex items-center gap-2"><Mail size={13} /> {EMAIL}</span>
              <span className="flex items-center gap-2"><Phone size={13} /> +91 7281920282</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#030303]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-3 px-6 lg:px-12 py-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vivek Kumar</p>
          <a href={RESUME} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">Resume (PDF)</a>
        </div>
      </footer>
    </main>
  );

  return (
    <>
      <GlobalStyles />
      {showIntro && <Intro onReveal={() => setRevealed(true)} onDone={() => setShowIntro(false)} />}
      {revealed && pageContent}
    </>
  );
}