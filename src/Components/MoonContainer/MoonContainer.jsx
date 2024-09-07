import { useState, Suspense } from 'react';
import './moonContainer.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';


function Model(props){
  const { scene } = useGLTF("/Moon_high.glb");
  const modelRef = useRef();

  // Add rotation using useFrame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });
  return <primitive ref={modelRef} object={scene} {...props} />;
}

function MoonContainer(props) {
  return (
    <>
      <Canvas>
        {/* <color attach="background" args={["#101010"]}/> */}
        <PresentationControls speed={1} zoom={1}>
          <Stage  shadows={false}>
            <Model scale={0.15}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default MoonContainer;