import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constansts";
import LaravelLogo from "../components/LaravelLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Target from "../components/Target.jsx";
import Cubo from "../components/Cubo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  
  const tamanhos = calculateSizes(isSmall, isMobile, isTablet);
  
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hi, I'm João <span className="waving-hand">🤘</span></p>
        <p className="hero_tag text-gray_gradient">Building Web Products</p>
      </div>
      
      
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          
          <Suspense fallback={<CanvasLoader/>}>
            
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={tamanhos.deskScale}
                position={tamanhos.deskPosition} 
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            
            
            <group>
              <LaravelLogo position={tamanhos.laravelPosition} scale={tamanhos.laravelLogoScale}/>
              <ReactLogo position={tamanhos.reactLogoPosition} scale={tamanhos.reactLogoScale}/>
              <Target position={tamanhos.targetPosition} scale={tamanhos.targetScale}/>
              <Cubo position={tamanhos.cubePosition} scale={tamanhos.cubeScale}/>
            </group>
            
            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]}/>
          </Suspense>
          
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-fit z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  ); 
}
export default Hero;