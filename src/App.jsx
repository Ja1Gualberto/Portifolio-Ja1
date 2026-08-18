import React, { useRef, Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const AboutMe  = lazy(() => import("./sections/AboutMe"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact  = lazy(() => import("./sections/Contact"));
const Footer   = lazy(() => import("./sections/Footer"));

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackGroundCanvas from "./components/canvas/BackGroundCanvas";
import WorkExpirence from "./sections/WorkExpirence";

gsap.registerPlugin(ScrollTrigger);

// Componente wrapper que avisa quando os lazy sections foram montados
const LazyContent = ({ onLoaded }) => {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <>
      <AboutMe/>
      <Projects/>
      <WorkExpirence/>
      <Contact/>
      <Footer/>
    </>
  );
};

const App = () => {
  const mainRef = useRef(null);
  const [sectionsLoaded, setSectionsLoaded] = useState(false);

  useGSAP(() => {
    if (!sectionsLoaded) return;

    const sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, { scope: mainRef, dependencies: [sectionsLoaded] });

  return (
    <>
      <BackGroundCanvas />

      <main ref={mainRef} className="max-w-7xl mx-auto">
        <Navbar/>
        <Hero />
        <Suspense fallback={<div className="text-white text-center py-20">Carregando...</div>}>
          <LazyContent onLoaded={() => setSectionsLoaded(true)} />
        </Suspense>
      </main>
    </>
  );
};

export default App;