import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constansts";
import LaravelLogo from "../components/LaravelLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Target from "../components/Target.jsx";

const Hero = () => {
  const controls = useControls('HackerRoom', {
      positionX: { value: 0, min: -10, max: 10 },
      positionY: { value: 0, min: -10, max: 10 },
      positionZ: { value: 0, min: -10, max: 10 },
      rotationX: { value: 0, min: -10, max: 10 },
      rotationY: { value: 0, min: -10, max: 10 },
      rotationZ: { value: 0, min: -10, max: 10 },
      scale: { value: 0.07, min: 0.01, max: 0.5 },
    }
  );
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  
  const tamanhos = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hi, I'm João <span className="waving-hand">🤘</span></p>
        <p className="hero_tag text-gray_gradient">Building Web Products</p>
      </div>
      
      
      <div className="w-full h-full absolute inset-0">
        <Leva  />
        <Canvas className="w-full h-full">
          
          <Suspense fallback={<CanvasLoader/>}>
            
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <HackerRoom
              scale={tamanhos.deskScale}
              position={tamanhos.deskPosition} 
              rotation={[0.1, -Math.PI, 0]}
              
              // position={[controls.positionX, controls.positionY, controls.positionZ]}
              // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
              // scale={controls.scale}
            />
            
            <group>
              <LaravelLogo position={tamanhos.laravelPosition} scale={tamanhos.laravelLogoScale}/>
              <ReactLogo position={tamanhos.reactLogoPosition} scale={tamanhos.deskScale}/>
              <Target position={tamanhos.targetPosition} />
            </group>
            
            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]}/>
          </Suspense>
          
        </Canvas>
      </div>
    </section>
  ); 
}
export default Hero;