// Mock data for Raajpakhi's portfolio

export const profile = {
  name: "Raajpakhi",
  firstName: "Raaj",
  lastName: "Pakhi",
  role: "The Ultimate Developer",
  tagline: "Building Scalable Solutions For A Better Tomorrow",
  bio: "I architect distributed systems and craft developer experiences that scale. With a decade of experience building infrastructure, I turn complex problems into elegant, high-performance products.",
  location: "Kolkata, India",
  email: "gpaul.lbs1@gmail.com",
  phone: "+91 96740 04392",
  resumeUrl: "/Deep Purple Professional College Student CV Resume.pdf",
  social: {
    github: "https://github.com/SoulSaviour1234",
    linkedin: "https://www.linkedin.com/in/srijit-paul-65593630b/",
    instagram: "https://www.instagram.com/_raajpakhi_13/",
    whatsapp: "https://wa.me/919674004392",
    dribbble: "https://dribbble.com/raajpakhi"
  },
  stats: [
    { label: "HACKATHONS ATTENDED & 3 WON", value: "5+" },
    { label: "PROJECTS SHIPPED", value: "5+" },
    { label: "FULL-STACK ARCHITECTURE", value: "MODERN" },
    { label: "UNDERGRADUATE @AU", value: "CS" }
  ]
};

export const skills = [
  // LANGUAGES
  { name: "JavaScript", level: 75, category: "LANGUAGES" },
  { name: "TypeScript", level: 65, category: "LANGUAGES" },
  { name: "Python", level: 55, category: "LANGUAGES" },
  { name: "C/C++", level: 45, category: "LANGUAGES" },
  // FRONTEND
  { name: "Tailwind CSS", level: 78, category: "FRONTEND" },
  { name: "React", level: 72, category: "FRONTEND" },
  { name: "Next.js", level: 68, category: "FRONTEND" },
  { name: "Framer Motion", level: 60, category: "FRONTEND" },
  // BACKEND
  { name: "Supabase", level: 65, category: "BACKEND" },
  { name: "FastAPI", level: 62, category: "BACKEND" },
  { name: "Node.js", level: 60, category: "BACKEND" },
  // AI & WEB3
  { name: "Gemini API", level: 65, category: "AI & WEB3" },
  { name: "PostgreSQL", level: 55, category: "AI & WEB3" },
  { name: "TensorFlow", level: 45, category: "AI & WEB3" },
  { name: "Web3 (Geth)", level: 40, category: "AI & WEB3" }
];

export const projects = [
  {
    id: "p1",
    title: "Sanchay — AI Financial Sanctuary",
    category: "AI-FINTECH",
    year: "2026",
    description: "A next-generation financial mentor that transforms budgeting into an immersive experience. Features AI-driven wealth forecasting, gamified savings trees, and real-time Telegram nudges to architect long-term fiscal discipline.",
    image: "/projects/sanchay_piggy.png",
    tech: ["FastAPI", "React", "Google Gemini AI", "PostgreSQL", "Tailwind CSS"],
    metrics: { "AI COGNITION": "GEMINI 2.5 FLASH", "LATENCY": "< 15ms (Neon DB)", "AUTOMATION": "TELEGRAM BOT 24/7", "ALGORITHM": "SMART ROLLOVER V2" },
    link: "https://sanchay-live.vercel.app"
  },
  {
    id: "p2",
    title: "Dr. Brinjal — Sea-Glass Bloom AI Pathologist",
    category: "HYBRID-AI / AGRI-TECH",
    year: "2026",
    description: "An immersive, high-fidelity agricultural diagnostic platform leveraging a dual-tier hybrid AI system to identify 13+ crop pathologies. Features real-time edge-ML gatekeeping, Gemini-powered visual environmental audits (pH/Nitrogen), and localized clinical action plans for regional farmers.",
    image: "/projects/dr_brinjal_final.png",
    tech: ["React 19", "FastAPI", "TensorFlow", "Gemini 2.0", "Tailwind v4", "Framer Motion"],
    metrics: { "ACCURACY": "94%+ (Hybrid Avg.)", "INFERENCE": "<0.8s (Edge-Gated)", "ENGINES": "ResNet50 • DenseNet Pro • MobileNetV2" },
    link: "https://dr-brinjal.vercel.app"
  },
  {
    id: "p3",
    title: "Raajpakhi 3D — Immersive Web Experience",
    category: "3D WEB DEVELOPMENT",
    year: "2026",
    description: "A next-generation interactive portfolio featuring real-time 3D physics, dynamic cursor lighting, and optimized WebGL rendering. Designed to push the boundaries of modern web aesthetics and performance.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tech: ["React 18", "Three.js", "React Three Fiber", "Rapier Physics", "Tailwind CSS"],
    metrics: { "PHYSICS ENGINE": "RAPIER V1", "RENDERING": "WEBGL 2.0", "PERFORMANCE": "60 FPS", "LIGHTING": "DYNAMIC PBR" },
    isInProgress: false,
    link: "https://github.com/SoulSaviour1234/3D-Portfolio"
  },
  {
    id: "p4",
    title: "System Architecture — [REDACTED]",
    category: "ARCHITECTURE IN DEVELOPMENT",
    year: "2026",
    description: "Currently engineering a new full-stack system. Details, metrics, and architecture diagrams will be unlocked upon final deployment.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    tech: [],
    metrics: {},
    isInProgress: true,
    link: "#"
  }
];

export const experience = [
  {
    id: "e6",
    company: "Cy-Coders Club",
    role: "Member",
    period: "AUG 2024 – PRESENT",
    location: "ADAMAS UNIVERSITY",
    description: "Dedicated member of the university's premier coding community, focused on competitive programming and full-stack development.",
    highlights: [
      "Participating in technical sprints, algorithmic challenges, and collaborative coding sessions.",
      "Fostering a culture of high-performance software engineering and continuous learning within the campus tech community.",
      "Assisting in the development of open-source tools and resource libraries for the university’s developer ecosystem."
    ]
  },
  {
    id: "e5",
    company: "Google Developers Group (GDG)",
    role: "Active Member",
    period: "AUG 2024 – PRESENT",
    location: "KOLKATA, INDIA",
    description: "Engaged participant in the campus GDG community, contributing to technical discussions and collaborative development projects.",
    highlights: [
      "Exploring and implementing Google’s advanced developer tools, including native integration of Gemini AI models into web applications.",
      "Collaborating with peers on open-source initiatives and community-driven tech projects.",
      "Actively participating in Google developer events, study jams, and technical symposiums to stay at the forefront of emerging technologies."
    ]
  },
  {
    id: "e3",
    company: "Clash of Coders 2.0",
    role: "Team Leader (404 not found)",
    period: "MARCH 2025",
    location: "ADAMAS UNIVERSITY",
    description: "Secured the championship title by leading '404 not found' through a series of rigorous technical challenges and rapid prototyping sessions.",
    highlights: [
      "Won the Grand Prize in a highly competitive university hackathon environment.",
      "Engineered the primary application logic and coordinated the integration of innovative features.",
      "Successfully pitched the technical architecture and business value to a panel of expert judges."
    ]
  },
  {
    id: "e4",
    company: "Innovate X @ IMI Kolkata",
    role: "Team Member (Fantastic 4)",
    period: "JAN 2026",
    location: "KOLKATA, INDIA",
    description: "Collaborated within 'Fantastic 4' to develop an award-winning innovative solution, winning the prestigious Innovate X competition.",
    highlights: [
      "Secured 1st Place at IMI Kolkata's flagship innovation challenge.",
      "Contributed to the full-stack development and creative direction of the project.",
      "Balanced technical feasibility with market viability to deliver a winning prototype."
    ]
  },
  {
    id: "e1",
    company: "Coding Premier League @ Signifiya",
    role: "Team Leader (Fantastic 4)",
    period: "FEB 2026",
    location: "ADAMAS UNIVERSITY",
    description: "Led 'Fantastic 4' to victory in a high-intensity competitive programming league, demonstrating advanced algorithmic strategy and team coordination.",
    highlights: [
      "Won the 1st Place title among university-wide competitive programming teams.",
      "Managed real-time problem-solving strategies and delegated complex algorithmic tasks under pressure.",
      "Optimized code efficiency and execution speed to secure the top spot on the leaderboard."
    ]
  },
  {
    id: "e0-2",
    company: "Sanchay AI",
    role: "Lead Developer & Creator",
    period: "MARCH 2026",
    location: "REMOTE / INDEPENDENT",
    description: "Independently engineered 'Sanchay,' a smart expense tracker project designed to simplify personal finance through automated tracking and intelligent insights.",
    highlights: [
      "Architected the core system using FastAPI and Google Gemini AI to provide advanced wealth forecasting and fiscal cognition.",
      "Developed a 24/7 automated Telegram nudge system and integrated gamified 'savings trees' to build long-term discipline.",
      "Optimized backend performance with Neon DB, maintaining a system latency of <15ms for real-time financial tracking."
    ]
  },
  {
    id: "e0-1",
    company: "Dr Brinjal Tech Labs",
    role: "Lead Architect (Team: Asmita, Soyuz, Anisha)",
    period: "APRIL 2026",
    location: "KOLKATA, INDIA",
    description: "Spearheaded the development of 'Dr. Brinjal,' a specialized AI project focused on early disease detection specifically for Brinjal crops through rigorous neural network training.",
    highlights: [
      "Collaborated with Asmita, Soyuz, and Anisha to engineer a high-performance model ensemble featuring ResNet 50, DenseNet Pro, and MobileNet V2.",
      "Conducted extensive training and validation to achieve high accuracy in identifying early-stage Brinjal pathologies.",
      "Optimized the inference pipeline to ensure that detection models could be deployed for real-world agricultural monitoring."
    ]
  }
];

export const education = [
  {
    id: "edu1",
    company: "Adamas University",
    role: "B.Tech in Computer Science & Engineering",
    period: "2023 – PRESENT (5th Semester)",
    location: "KOLKATA, INDIA",
    description: "Currently pursuing undergraduate studies with a specialized focus on modern software architecture, artificial intelligence, and full-stack systems.",
    highlights: [
      "Building high-performance, production-ready applications as part of core project coursework.",
      "Developing a deep theoretical foundation in Data Structures, Algorithms, and Relational Database Management.",
      "Actively engaging in peer-led technical seminars and open-source contributions to broaden domain expertise."
    ]
  },
  {
    id: "edu2",
    company: "International Public School",
    role: "Higher Secondary (ISC) - Science Stream",
    period: "GRADUATED 2023",
    location: "85% OVERALL",
    description: "Completed rigorous pre-university coursework with a core focus on advanced sciences and mathematics.",
    highlights: [
      "Secured an 85% aggregate score in the Indian School Certificate (ISC) examinations.",
      "Developed early analytical and logical problem-solving skills through physics, chemistry, and mathematics tracks.",
      "Demonstrated consistent excellence in advanced mathematics and computer science electives."
    ]
  },
  {
    id: "edu3",
    company: "International Public School",
    role: "Secondary Education (ICSE)",
    period: "NURSERY – 2021",
    location: "88% OVERALL",
    description: "Built a strong, decade-long academic foundation across multidisciplinary subjects.",
    highlights: [
      "Achieved an 88% overall aggregate in the ICSE board examinations.",
      "Consistently demonstrated high academic aptitude, setting the groundwork for a transition into STEM fields.",
      "Awarded for outstanding performance in multidisciplinary competitive school-level assessments."
    ]
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Asmita",
    role: "Professional friend",
    avatar: "/Asmita.jpeg",
    quote: "A proactive Computer Science engineering student and full-stack developer specializing in modern web architectures and the integration of advanced AI models to build impactful, real-world software solutions.",
    link: "https://www.linkedin.com/in/asmita-mishra-0427b5368/"
  },
  {
    id: "t2",
    name: "Sulagna Dutta",
    role: "Professional Friend",
    avatar: "/Sulagna.jpeg",
    quote: "A forward-thinking developer who genuinely gets how to integrate AI. He has a real talent for taking complex algorithms and turning them into practical, cloud-hosted apps that work seamlessly.",
    link: "https://www.linkedin.com/in/sulagna-dutta-ab5257358"
  },
  {
    id: "t3",
    name: "Saptarshi Basak",
    role: "Professional Friend",
    avatar: "/Saptarshi.jpeg",
    quote: "From UI to API he can build it all and ship a polished product at your service.",
    link: "https://www.linkedin.com/in/saptarshi-basak/"
  }
];

export const blog = [
  {
    id: "b1",
    title: "Diagnosing Crop Pathologies with Dual-Tier AI",
    excerpt: "A deep dive into the methodology behind Dr. Brinjal. Detailing how I ensembled convolutional networks with Gemini's multimodal analysis for high-fidelity agricultural diagnostics at the edge.",
    date: "MAY 28, 2026",
    readTime: "6 MIN",
    tag: "AI RESEARCH",
    image: "/blog/crop_pathology.png"
  },
  {
    id: "b2",
    title: "Building an Immutable Audit Ledger",
    excerpt: "Exploring the backend infrastructure of a Smart Campus Management System. How I engineered a secure, tamper-proof administrative ledger and a predictive utilization oracle.",
    date: "APR 15, 2026",
    readTime: "8 MIN",
    tag: "SYSTEM ARCHITECTURE",
    image: "/blog/new_audit_ledger.png",
    objectPosition: "object-[center_40%]"
  },
  {
    id: "b3",
    title: "Wealth Forecasting with Gemini 2.5 Flash",
    excerpt: "Breaking down the logic of Sanchay. Routing heavy financial algorithms through FastAPI to create a gamified, real-time fiscal mentor under strict competitive time constraints.",
    date: "FEB 28, 2026",
    readTime: "5 MIN",
    tag: "HACKATHON INSIGHTS",
    image: "/blog/wealth_forecasting.png"
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
