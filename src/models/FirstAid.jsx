import React, { useState } from "react";
import { useFBX } from "@react-three/drei";

export default function FirstAid() {
  const tv = useFBX("/First Aid/Models/Firstaid_low.fbx");
  console.log(tv);
  return (
    <>
      <primitive
        object={tv}
        scale={0.4}
        position={[26.2, 8, 15]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useFBX.preload("/First Aid/Models/Firstaid_low.fbx");
