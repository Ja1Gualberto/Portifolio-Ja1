import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import vertexShader from "./shaders/vertexShaders_Fluid";
import fragmentShader from "./shaders/fragmentShader_Fluid";
import { useControls } from "leva";
import * as THREE from 'three'

const FluidPlane = () => {
  const { viewport } = useThree();
  const { speed, colorA, colorB } = useControls({
    speed: { value: 0.15, min: 0, step: 0.01},
    colorA: '#001122',
    colorB: '#0006cc'
  });
  
  const meshRef = useRef();
  
  const uniform = useMemo(() => ({
    uTime:   { value: 0.0 },
    uColorA: { value: new THREE.Color(colorA) },
    uColorB: { value: new THREE.Color(colorB) },
    // uTime: { value: 0.0 },
    // uColorA: { value: [0.0, 0.0, 0.1]},
    // uColorB: { value: [0.0, 0.3, 0.6]},
  }), []);
  
  useFrame(({ clock }) => {
    uniform.uTime.value = clock.elapsedTime * speed
    uniform.uColorA.value.set(colorA) 
    uniform.uColorB.value.set(colorB) 
  });
  
  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]}/>
      
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniform}
      />
    </mesh>
  )
}
export default FluidPlane;