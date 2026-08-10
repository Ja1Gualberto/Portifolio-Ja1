import { useState } from 'react';
import Globe from "react-globe.gl";
import Button from "../components/Button";
import GlobeLight from "../components/GlobewLight";

const AboutMe = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' jguberto@gmail.com');
    setHasCopied(true);
    
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  
  return (
    // <section className="right-0 left-0 w-full ">
    <section className="c-space my-20" id="about">
      <div>
        <p className="head-text mb-10">
          About Me
        </p>
      </div>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      {/* <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5"> */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/AvatarIcon.png" alt="avatarIcon" className="w-full sm:h-[276px] h-fit object-contain"/>
          
            <div className="">
              <p className="grid-headtext">Hi, I'm João</p>
              <p className="grid-subtext">
                As an experienced full-stack web developer, I build dynamic, responsive, and efficient solutions using PHP (Laravel), React, and MySQL.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
              <img src="/assets/stackLogo.png" alt="stacks" className="w-full sm:h-[276px] h-fit object-contain"/>
            
            <div className="flex flex-col flex-1">
              <p className="grid-headtext">Stacks</p>
              <p className="grid-subtext">
                I'm specialized in Full Stack Developer focused on PHP/Laravel and JavaScript/React. I build end-to-end applications using Tailwind for interfaces and Docker with MySQL for infrastructure.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            {/* <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"> */}
            <div className="rounded-3xl w-full h-fit flex justify-center items-center mb-0">
              {/* <GlobeLight/> */}
              <Globe
                height={400}
                width={400}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -8.7496958, lng: -63.8765206, text: 'Rondonia, Brasil', color: 'white', size: 10000 }]}
              />
            </div>
            
            <div>
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I&apos;m based in Rondonia, Brasil and open to remote work worldwide</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain" />
            
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img 
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jguberto@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;