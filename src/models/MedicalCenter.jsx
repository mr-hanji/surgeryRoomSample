import React, { useEffect } from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function MedicalCenter({}) {
  const ceiling = useGLTF("/Operation.glb");

  useEffect(() => {
    ceiling.scene.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
  }, [ceiling]);

  return (
    <>
      <primitive
        object={ceiling.scene}
        scale={5}
        position={[-50, -18.5, 18]}
        // rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/Operation.glb");
