import React, { useEffect } from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function MedicalCenter({}) {
  const wall = useGLTF("/newWall.glb");

  useEffect(() => {
    wall.scene.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
  }, [wall]);

  return (
    <>
      <primitive
        object={wall.scene}
        scale={5}
        position={[-50, -18.5, 18]}
        // rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/newWall.glb");
