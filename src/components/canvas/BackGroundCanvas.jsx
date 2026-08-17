import LightPillar from "../LightPillar"
import LightRays from "../LightRays"
import Silk from "../Silk"

const BackGroundCanvas = () => {
    return (
      // <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
      //   <LightRays
      //     raysOrigin="top-center"
      //     raysColor="#8700cc"
      //     raysSpeed={1}
      //     lightSpread={0.5}
      //     rayLength={3}
      //     followMouse={true}
      //     mouseInfluence={0.1}
      //     noiseAmount={0}
      //     distortion={0}
      //     className="custom-rays"
      //     pulsating={false}
      //     fadeDistance={1}
      //     saturation={1}
      //   />
      // </div>
      
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none">
        {/* <LightPillar
          topColor="#a600ff"
          bottomColor="#080808"
          intensity={0.8}
          rotationSpeed={0.7}
          interactive={false}
          glowAmount={0.003}
          pillarWidth={2.5}
          pillarHeight={0.45}
          noiseIntensity={0.7}
          pillarRotation={295}
        /> */}
        {/* <LightPillar
          topColor="#68288b"
          bottomColor="#bb00ff"
          intensity={0.9}
          rotationSpeed={0.8}
          interactive={false}
          glowAmount={0.003}
          pillarWidth={3}
          pillarHeight={0.3}
          noiseIntensity={1}
          pillarRotation={295}
        /> */}
        <LightPillar
          topColor="#3f1c59"
          bottomColor="#a600ff"
          intensity={0.9}
          rotationSpeed={0.8}
          interactive={false}
          glowAmount={0.003}
          pillarWidth={3}
          pillarHeight={0.3}
          noiseIntensity={0.2}
          pillarRotation={295}
        />
      </div>
    )
}

export default BackGroundCanvas