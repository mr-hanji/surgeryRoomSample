import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Floor() {
  const floor = useGLTF("/floor.glb");

  useEffect(() => {
    floor.scene.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;

        // Make the material shiny
        if (child.material) {
          child.material.metalness = 0.8; // Makes the material metallic
          child.material.roughness = 0.8; // Makes the material smooth and shiny
        }
      }
    });
  }, [floor]);

  return (
    <primitive object={floor.scene} scale={5} position={[-50, -18.5, 18]} />
  );
}

useGLTF.preload("/floor.glb");
