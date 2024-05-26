import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

export default function TV() {
  const tv = useGLTF("/TV.glb");
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/public/medical.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });
  return (
    <>
      <primitive
        object={tv.scene}
        scale={3}
        position={[-20.5, 12, -10]}
        // rotation-y={Math.PI}
      >
        <mesh rotation-y={Math.PI / 2}>
          <planeGeometry args={[2.5, 1.5]} />
          <meshStandardMaterial>
            <videoTexture attach="map" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </primitive>
    </>
  );
}

useGLTF.preload("/TV.glb");
