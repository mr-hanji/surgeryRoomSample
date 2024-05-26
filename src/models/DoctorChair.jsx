import React, { useEffect } from "react";
import { useFBX, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function DoctorChair() {
  const fbx = useFBX("/doctorChair/doctorChair.fbx");

  // Load textures
  const [chairTexture] = useTexture([
    "/doctorChair/texture/clean/1.png",
    "/doctorChair/texture/clean/2.png",
    "/doctorChair/texture/clean/3.png",
    "/doctorChair/texture/clean/4.png",
    "/doctorChair/texture/clean/5.png",
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
        castShadow
        object={fbx}
        scale={0.09}
        position={[-15, 0, 10]}
        // position={[0, 0, 0]}
        rotation-y={Math.PI}
      />
    </>
  );
}

useFBX.preload("/doctorChair/doctorChair.fbx");
