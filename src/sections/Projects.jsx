import { Suspense, useRef, useState } from "react";
import { myProjects } from "../constansts";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { Leva, useControls } from "leva";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  
  const controlsRef = useRef();
  const timerRef = useRef(null);
  
  const resetCamera = () => {
    if (controlsRef.current) {
      
      controlsRef.current.enabled = false;
      
      gsap.to(controlsRef.current.object.position, {
        x:0,
        y:0,
        z:5,
        duration: 1.5,
        ease: 'power3.inOut',
        onUpdate: () => {
          controlsRef.current.update();
        },
        onComplete: () => {
          controlsRef.current.enabled = true;
        }
      });
      
      gsap.to(controlsRef.current.target, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });

      // controlsRef.current.reset();
    }
  };
  
  const handleStart = () => {
    clearTimeout(timerRef.current);
  }
  
  const handleEnd = () => {
    timerRef.current = setTimeout(resetCamera,2000);
  }
  
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
  
  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectProjectIndex]);
  
      return (
      <section className="c-space my-20">
        <p className="head-text">My Work</p>
        
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 border border-black-300 bg-black-200 rounded-lg">
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
          </div>
          
          {/* <div className="border  border-black-300 bg-gray-950 rounded-lg h-96 md:h-full"> */}
          <div className="border  border-black-300 bg-gradient-to-br from-gray-950 to-slate-900 rounded-lg h-96 md:h-full">
            
            <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
              <ambientLight intensity={Math.PI}/>
              <directionalLight position={[10,10,5]}/>
                
              <group scale={0.060} position={[0, -3.5, -5]} rotation={[0, -0.3, 0]}>
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <DemoComputer texture={projectSelect.texture}/>
                  </Suspense>
                </Center>
              </group>
              <OrbitControls
                ref={controlsRef}
                onStart={handleStart}
                onEnd={handleEnd}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                minAzimuthAngle={-Math.PI / 3}
                maxAzimuthAngle={Math.PI / 3}
              />
            </Canvas>
          </div>
        </div>
      </section>
    );
};

export default Projects;