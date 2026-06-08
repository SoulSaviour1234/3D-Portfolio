import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/three/ParticleBackground";

function CursorBlob() {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, [data-cursor="hover"]')) setHovering(true);
      else setHovering(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return <div ref={ref} className={`cursor-blob hidden md:block ${hovering ? "hover" : ""}`} />;
}

const Home = () => {
  return (
    <div className="relative text-[#ece4f5] noise-overlay">
      <CursorBlob />
      <div className="relative z-20">
        <Navbar />
      </div>
      <ParticleBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
