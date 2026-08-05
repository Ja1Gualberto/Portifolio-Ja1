import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

const App = () => {
  return (
    <main className="max-w-7x1 mx-auto">
      <Navbar/>
      <Hero />
      <AboutMe/>
    </main>
  )
}
export default App;