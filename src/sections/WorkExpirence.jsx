import { workExperiences } from "../constansts";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import RobotExpirience from "../components/RobotExpirience";

const WorkExpirence = () => {
    const [animationName, setAnimationName] = useState('Experiment');

    return (
      <section className="c-space my-20">
        <div className="w-full text-white-600">
          <h3 className="head-text">My Work Expirience</h3>
          
          <div className="work-container">
            <div className="work-canvas">
              <Canvas>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                <Suspense fallback={<CanvasLoader />}>
                  <RobotExpirience 
                    animationName={animationName} 
                    position-y={-2.5}
                    position-z={-1.25}
                    scale={2} 
                  />
                </Suspense>
              </Canvas>
            </div>
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map(({id, name, pos, duration, title, icon, animation}) =>(
                  <div 
                    key={id} 
                    className="work-content_container group"
                    // onPointerOver={() => setAnimationName(animation?.toLowerCase() || 'experiment')}
                    // onPointerOut={() => setAnimationName('experiment')}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar"/>
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">
                        {name}
                      </p>
                      
                      <p className="group-hover:text-white transition ease-in-out ">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WorkExpirence;