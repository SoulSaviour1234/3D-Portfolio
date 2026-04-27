// Mock data for Raajpakhi's portfolio

export const profile = {
  name: "Raajpakhi",
  firstName: "Raaj",
  lastName: "Pakhi",
  role: "Software Engineer",
  tagline: "Building Scalable Solutions For A Better Tomorrow",
  bio: "I architect distributed systems and craft developer experiences that scale. With a decade of experience building infrastructure, I turn complex problems into elegant, high-performance products.",
  location: "Bengaluru, India",
  email: "hello@raajpakhi.dev",
  phone: "+91 98765 43210",
  resumeUrl: "#",
  social: {
    github: "https://github.com/raajpakhi",
    linkedin: "https://linkedin.com/in/raajpakhi",
    twitter: "https://twitter.com/raajpakhi",
    dribbble: "https://dribbble.com/raajpakhi"
  },
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Systems Shipped", value: "40+" },
    { label: "Open Source", value: "12K" },
    { label: "Happy Teams", value: "30+" }
  ]
};

export const skills = [
  { name: "TypeScript", level: 95, category: "Languages" },
  { name: "Go", level: 90, category: "Languages" },
  { name: "Rust", level: 78, category: "Languages" },
  { name: "Python", level: 88, category: "Languages" },
  { name: "React", level: 96, category: "Frontend" },
  { name: "Three.js", level: 85, category: "Frontend" },
  { name: "Next.js", level: 92, category: "Frontend" },
  { name: "Node.js", level: 94, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Backend" },
  { name: "Kubernetes", level: 86, category: "DevOps" },
  { name: "AWS", level: 89, category: "DevOps" },
  { name: "GraphQL", level: 88, category: "Backend" }
];

export const projects = [
  {
    id: "p1",
    title: "Helios — Distributed Cache",
    category: "Infrastructure",
    year: 2025,
    description: "A globally distributed in-memory cache with sub-millisecond reads and consensus replication across 12 regions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    tech: ["Rust", "Raft", "gRPC", "Kubernetes"],
    metrics: { users: "500K+", uptime: "99.99%", latency: "<2ms" },
    link: "#"
  },
  {
    id: "p2",
    title: "Atlas — Edge Compute Platform",
    category: "Platform",
    year: 2024,
    description: "Serverless edge runtime executing TypeScript functions at 200+ POPs with V8 isolate cold start under 5ms.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    tech: ["Go", "V8", "WebAssembly", "Cloudflare"],
    metrics: { users: "2M+", uptime: "99.95%", latency: "5ms cold" },
    link: "#"
  },
  {
    id: "p3",
    title: "Nova — Real-time Collaboration SDK",
    category: "Developer Tools",
    year: 2024,
    description: "CRDT-powered collaboration toolkit used by 12K developers. Conflict-free multi-cursor editing in any framework.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80",
    tech: ["TypeScript", "Yjs", "WebRTC", "React"],
    metrics: { users: "12K devs", uptime: "99.9%", latency: "30ms sync" },
    link: "#"
  },
  {
    id: "p4",
    title: "Prism — Observability Suite",
    category: "DevOps",
    year: 2023,
    description: "OpenTelemetry-native observability platform with anomaly detection, ingesting 4B events daily across 200 services.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tech: ["Go", "ClickHouse", "Kafka", "OpenTelemetry"],
    metrics: { users: "800+ teams", uptime: "99.98%", latency: "4B events/day" },
    link: "#"
  },
  {
    id: "p5",
    title: "Lumen — AI Code Reviewer",
    category: "AI / Developer Tools",
    year: 2025,
    description: "LLM-powered static analysis bot that learns from your codebase and reviews PRs with the voice of your team.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    tech: ["Python", "LangGraph", "Postgres", "GitHub API"],
    metrics: { users: "3K repos", uptime: "99.9%", latency: "~8s/PR" },
    link: "#"
  },
  {
    id: "p6",
    title: "Strata — Streaming Database",
    category: "Infrastructure",
    year: 2023,
    description: "Materialized view database that compiles SQL into incremental dataflow pipelines. Real-time analytics, no ETL.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    tech: ["Rust", "Differential Dataflow", "Arrow"],
    metrics: { users: "60+ co's", uptime: "99.95%", latency: "~10ms ms" },
    link: "#"
  }
];

export const experience = [
  {
    id: "e1",
    company: "Stratosphere Labs",
    role: "Principal Engineer",
    period: "2023 — Present",
    location: "Remote",
    description: "Leading the platform team building edge compute primitives. Architected the multi-region runtime serving 2M+ developers.",
    highlights: [
      "Reduced p99 cold start by 78% via custom V8 snapshot pipeline",
      "Drove platform revenue from $2M → $14M ARR",
      "Mentored 18 engineers; promoted 6 to senior roles"
    ]
  },
  {
    id: "e2",
    company: "Northwind Systems",
    role: "Staff Software Engineer",
    period: "2020 — 2023",
    location: "Bengaluru",
    description: "Built the streaming-first observability backend ingesting 4B events/day. Owned end-to-end query performance.",
    highlights: [
      "Designed columnar storage saving $1.2M/yr in cloud costs",
      "Authored RFC for distributed tracing standard adopted org-wide",
      "Open-sourced core query engine (4.2K GitHub stars)"
    ]
  },
  {
    id: "e3",
    company: "Helios Cloud",
    role: "Senior Backend Engineer",
    period: "2017 — 2020",
    location: "Singapore",
    description: "Founding engineer on distributed cache product. Owned consensus, replication and developer SDK surface.",
    highlights: [
      "Implemented Raft from spec; <2ms read replication across regions",
      "Shipped SDKs in 6 languages with 99.99% backwards compat",
      "Acquired by Helios Cloud for $40M in 2020"
    ]
  },
  {
    id: "e4",
    company: "Indigo Studio",
    role: "Full-stack Engineer",
    period: "2015 — 2017",
    location: "Mumbai",
    description: "Shipped client products across React, Node and AWS for early-stage Asian startups.",
    highlights: [
      "Delivered 9 production apps in 2 years",
      "Built internal CLI used by every project since 2016"
    ]
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Mira Tanaka",
    role: "VP Engineering, Stratosphere",
    avatar: "https://i.pravatar.cc/120?img=47",
    quote: "Raaj is the engineer other engineers ask to review their work. He turns chaos into systems you can reason about."
  },
  {
    id: "t2",
    name: "Diego Moreno",
    role: "CTO, Helios Cloud",
    avatar: "https://i.pravatar.cc/120?img=12",
    quote: "He shipped a Raft implementation in 6 weeks that survived three years of production with zero data-loss incidents."
  },
  {
    id: "t3",
    name: "Anika Roy",
    role: "Founder, Nova",
    avatar: "https://i.pravatar.cc/120?img=32",
    quote: "Raaj's developer experience instinct is uncanny. Our SDK adoption tripled the quarter he joined."
  },
  {
    id: "t4",
    name: "Lukas Brandt",
    role: "Staff SRE, Northwind",
    avatar: "https://i.pravatar.cc/120?img=68",
    quote: "The clearest thinker I've shared an on-call rotation with. Calm, precise, and writes documentation people actually read."
  }
];

export const blog = [
  {
    id: "b1",
    title: "Designing a CRDT for messy human teams",
    excerpt: "Most CRDT papers assume well-behaved clients. Here's what we learned shipping one to 12K developers in production.",
    date: "Jun 14, 2025",
    readTime: "9 min",
    tag: "Distributed Systems",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80"
  },
  {
    id: "b2",
    title: "V8 isolate cold starts: the real numbers",
    excerpt: "Five months profiling cold starts at the edge. Spoiler — your snapshot strategy matters more than your runtime.",
    date: "Apr 02, 2025",
    readTime: "12 min",
    tag: "Performance",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&q=80"
  },
  {
    id: "b3",
    title: "How I write RFCs that get shipped",
    excerpt: "A repeatable structure for technical proposals that turns 'maybe later' into 'merged on Monday'.",
    date: "Feb 21, 2025",
    readTime: "6 min",
    tag: "Engineering Culture",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80"
  }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" }
];
