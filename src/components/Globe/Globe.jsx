import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import globeModel from '../../assets/models/globe/globe.glb';

function GlobeModel() {
  const meshRef = useRef();
  const { scene } = useGLTF(globeModel);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={[5, 5, 5]} // Увеличиваем масштаб
      position={[0, 0, 0]}
    />
  );
}

function Globe() {
  return (
    <div style={{ width: '100%', height: '700px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GlobeModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default Globe;