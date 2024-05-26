import React from "react";
import { useFBX } from "@react-three/drei";

export default function ICU() {
  const icu = useFBX("/ICU/ICU.fbx");
  return (
    <primitive
      object={icu}
      scale={0.13}
      position={[20.5, 0, 2]}
      rotation-y={-Math.PI / 2}
    />
  );
}

useFBX.preload("/ICU/ICU.fbx");
