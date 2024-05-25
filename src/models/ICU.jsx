import React from "react";
import { useFBX } from "@react-three/drei";

export default function ICU() {
  const icu = useFBX("/ICU/ICU.fbx");
  return <primitive object={icu} scale={0.06} position={[0, 0, 0]} />;
}

useFBX.preload("/ICU/ICU.fbx");
