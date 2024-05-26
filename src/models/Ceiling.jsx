import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Ceiling({}) {
  const ceiling = useGLTF("/ceiling.glb");

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

useGLTF.preload("/ceiling.glb");
