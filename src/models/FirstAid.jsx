import React, { useEffect, useState } from "react";
import { useFBX, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function FirstAid() {
  const fbx = useFBX("/First Aid/Models/Firstaid_low.fbx");

  const [chairTexture] = useTexture([
    "/First Aid/Textures/1.png",
    "/First Aid/Textures/2.png",
    "/First Aid/Textures/3.png",
    "/First Aid/Textures/4.png",
    "/First Aid/Textures/5.png",
  ]);

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.material = new MeshStandardMaterial({ map: chairTexture });
      }
    });
  }, [fbx]);

  return (
    <>
      <primitive
        object={fbx}
        scale={0.4}
        position={[26.2, 8, 15]}
        // position={[0, 3, 0]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useFBX.preload("/First Aid/Models/Firstaid_low.fbx");
