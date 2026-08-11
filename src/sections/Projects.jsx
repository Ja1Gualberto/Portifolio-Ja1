import { Suspense, useState } from "react";
import { myProjects } from "../constansts";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Group, Mesh } from "three";
import CanvasLoader from "../components/CanvasLoader";

const Projects = () => {
  
  const projectCount = myProjects.length;
  const [selectProjectIndex, setselectProjectIndex] = useState(0);
  
  const projectSelect = myProjects[selectProjectIndex];
  
  const navBtn = (direction) => {
    setselectProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    });
  };
  
      return (
      <section className="c-space my-20">
        <p className="head-text">My Work</p>
        
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 py-10 px-5 shadow-2xl shadow-black-200 relative">
          <div className="absolute top-0 right-0">
            <img src={projectSelect.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>
          
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit h-fit rounded-lg" style={projectSelect.logoStyle}>
            <img src={projectSelect.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
          </div>
          
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className=" text-white text-2xl font-semibold animetedText">{projectSelect.title}</p>
            <p className="animetedText">{projectSelect.desc}</p>
            <p className="animetedText">{projectSelect.subdesc}</p>
          </div>
          
          <div className=" flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {projectSelect.tags.map(
                (tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name}/>
                  </div>
                )
              )}
            </div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => navBtn('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => navBtn('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
          
          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={1}/>
              <directionalLight position={[10,10,5]}/>
                
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <Group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                    
                  </Group>
                
                </Suspense>
              </Center>
            </Canvas>
          </div>
        </div>
      </section>
    );
};

export default Projects;