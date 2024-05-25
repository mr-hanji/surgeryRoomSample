import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function MedicalCenter({}) {
  const ceiling = useGLTF("/Operation.glb");
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
