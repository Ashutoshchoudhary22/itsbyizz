import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const InfinitySymbol = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  let offset = 0;

  useFrame(() => {
    if (materialRef.current) {
      offset += 0.01;
      materialRef.current.map.offset.x = offset % 1;
    }
  });

  const points = [];
  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    const x = Math.sin(t) / (1 + Math.cos(t) ** 2);
    const y = Math.sin(t) * Math.cos(t) / (1 + Math.cos(t) ** 2);
    points.push(new THREE.Vector3(x * 2, y * 2, 0));
  }

  const curve = new THREE.CatmullRomCurve3(points);

  const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, "#00c6ff"); // Light Blue
    gradient.addColorStop(0.5, "#0072ff"); // Deep Blue
    gradient.addColorStop(1, "#00c6ff"); // Light Blue

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    return texture;
  }, []);

  return (
    <mesh ref={meshRef}>
      <tubeGeometry args={[curve, 100, 0.15, 16, true]} />
      <meshStandardMaterial
        ref={materialRef}
        map={gradientTexture}
        emissive={new THREE.Color("#0072ff")}
        emissiveIntensity={0.7}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const Stars = () => {
  const starRef = useRef();
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 200; i++) {
      positions.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return positions;
  }, []);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={starRef}>
      {stars.map((pos, i) => (
        <mesh key={i} position={pos.toArray()}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const ClickablePoints = ({ onPointClick }) => {
  const points = useMemo(() => [
    { position: new THREE.Vector3(1.4, 0.6, 0.3), id: "edge1", label: "Right Edge" },  // First point
    { position: new THREE.Vector3(1.6, 0.08, 0.98), id: "edge2", label: "Right Edge" }, // Second point
    { position: new THREE.Vector3(1.4, -0.5, 0.8), id: "edge3", label: "Right Edge" },

    { position: new THREE.Vector3(-1.4, 0.6, 0.3), id: "edge4", label: "Left Edge" },  // Mirrored from edge1
    { position: new THREE.Vector3(-1.6, 0.08, 0.98), id: "edge5", label: "Left Edge" }, // Mirrored from edge2
    { position: new THREE.Vector3(-1.4, -0.5, 0.8), id: "edge6", label: "Left Edge" } //
  ], []);

  return (
    <group>
      {points.map((point) => (
        <mesh key={point.id} position={point.position} onClick={() => onPointClick(point)}>
          <sphereGeometry args={[0.1, 14, 14]} />
          <meshStandardMaterial color="white" emissive="white" />
        </mesh>
      ))}
    </group>
  );
};

const Loop = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <InfinitySymbol />
        <ClickablePoints  />
        <Stars />
        <OrbitControls />
      </Canvas>
      {/* Center glowing text */}
      <div className="absolute text-center text-white font-bold text-3xl drop-shadow-lg" style={{ top: "45%" }}>
        <span className="text-green-400">The AI Platform</span><br /> for Business Transformation
      </div>
      {/* Left and right sections */}
    
      <div className="absolute left-20 top-1/3 text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
          <img src="/employee.jpg" alt="Employees" className="w-full h-full object-cover" />
        </div>
        <p className="mt-2 text-white bg-purple-600 px-3 py-1 rounded-full text-sm">Employees</p>
      </div>
      <div className="absolute right-20 top-1/3 text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
          <img src="/customer.jpg" alt="Customers" className="w-full h-full object-cover" />
        </div>
        <p className="mt-2 text-white bg-purple-600 px-3 py-1 rounded-full text-sm">Customers</p>
      </div>
    </div>
  );
};

export default Loop;
