import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import { useControls } from "leva";
import * as THREE from "three";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

import CustomShader from "./shaders/fragmentShader";

const PostProcessingEffect = () => {
  const { gl, scene, camera, size } = useThree();

  const { progress, scale } = useControls('ShaderPass', {
    progress: { value: 0.5, min: 0, max: 1, step: 0.01, label: 'Distorção' },
    scale:    { value: 1.0, min: 0.1, max: 5, step: 0.1,  label: 'Escala'   },
  });

  const shaderPassRef   = useRef();
  const originalRender  = useRef(null);

  const composer = useMemo(() => {
    const c = new EffectComposer(gl);
    c.addPass(new RenderPass(scene, camera));
    const shaderPass = new ShaderPass(CustomShader);
    shaderPassRef.current = shaderPass;
    c.addPass(shaderPass);
    return c;
  }, [gl, scene, camera]);

  useEffect(() => {
    originalRender.current = gl.render.bind(gl);
    return () => {
      if (originalRender.current) gl.render = originalRender.current;
    };
  }, [gl]);

  useEffect(() => {
    composer.setSize(size.width, size.height);
  }, [size, composer]);

  useFrame((state) => {
    if (originalRender.current) gl.render = originalRender.current;

    if (shaderPassRef.current) {
      shaderPassRef.current.uniforms.time.value     = state.clock.elapsedTime;
      shaderPassRef.current.uniforms.progress.value = progress;
      shaderPassRef.current.uniforms.scale.value    = scale;
    }

    composer.render();

    gl.render = () => {};
  }, 1);

  return null;
};

const BoxMesh = () => {
  const ref = useRef();
  useFrame((_, delta) => { ref.current.rotation.y += delta * 0.5; });
  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const SphereMesh = () => {
  const ref = useRef();
  useFrame((_, delta) => { ref.current.rotation.x += delta * 0.3; });
  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const BackGroundCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5] }}
      gl={{ clearColor: '#1a1a2e' }}
    >
      <BoxMesh />
      <SphereMesh />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <PostProcessingEffect />
    </Canvas>
  );
};

export default BackGroundCanvas;