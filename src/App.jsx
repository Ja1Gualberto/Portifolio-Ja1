import React, { useRef } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackGroundCanvas from "./components/canvas/BackGroundCanvas";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);
  
  useGSAP(() => {
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
  }, { scope: mainRef });

  return (
    <>
      <BackGroundCanvas />
      
      <main ref={mainRef} className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero />
      <AboutMe/>
      <Projects/>
      {/* <Clients/> */}
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}
export default App;