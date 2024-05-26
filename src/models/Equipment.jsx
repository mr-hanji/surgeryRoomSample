import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function Equipment() {
  const tv = useGLTF("/equipment/scene.gltf");
  return (
    <>
      <primitive
        object={tv.scene}
        scale={3}
        position={[0, 0, 0]}
        // rotation-y={Math.PI}
      />
    </>
  );
}

useGLTF.preload("/equipment/scene.gltf");
