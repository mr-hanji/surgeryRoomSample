import React, { useEffect, useRef } from "react";
import { useFBX, useHelper } from "@react-three/drei";
import * as THREE from "three";

export default function ICU() {
  const icu = useFBX("/ICU/ICU.fbx");
  const dirRef = useRef();
  // useHelper(dirRef, THREE.DirectionalLightHelper, 1); // add helper

  useEffect(() => {
    icu.traverse((child) => {
      if (child.isMesh) {
        // child.receiveShadow = true;
        // child.castShadow = true;
      }
    });
  }, [icu]);

  return (
    <>
      <directionalLight
        // castShadow
        target={icu}
        color={"white"}
        intensity={0.3}
        position={[-3, 8, 0]}
        ref={dirRef}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <primitive
        object={icu}
        scale={0.13}
        position={[20.5, 0, 2]}
        rotation-y={-Math.PI / 2}
      />
    </>
  );
}

useFBX.preload("/ICU/ICU.fbx");
