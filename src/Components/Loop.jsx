import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

function InfinityLoop({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();

  // Split the model into segments (if needed)
  const segments = useMemo(() => {
    const segments = [];
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        segments.push(child);
      }
    });
    return segments;
  }, [gltf]);

  // Animate the drawing of the loop
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const progress = (time * 0.5) % 1; // Progress from 0 to 1, looping

    segments.forEach((segment, index) => {
      const segmentProgress = Math.min(1, progress * segments.length - index);
      segment.visible = segmentProgress > 0; // Show segments based on progress
    });
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

export default function Loop() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <InfinityLoop url="/infinity_loop.glb" />
      <OrbitControls />
    </Canvas>
  );
}