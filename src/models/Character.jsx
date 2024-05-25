import React from "react";
import { useFBX } from "@react-three/drei";

export default function Character() {
  const icu = useFBX("/BreathingIdle.fbx");
  return <primitive object={icu} scale={0.06} position={[3, 0, 3]} />;
}

useFBX.preload("/BreathingIdle.fbx");
