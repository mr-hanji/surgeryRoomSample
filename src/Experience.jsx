import React, { useRef, useState, Suspense } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  useHelper,
  OrbitControls,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Lightformer,
  Loader,
  Html,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import ICU from "./models/ICU";
import Character from "./models/Character";
import MedicalCenter from "./models/MedicalCenter";
import TV from "./models/TV";
import Equipment from "./models/Equipment";

function Experience() {
  const { camera, gl } = useThree();
  const dirRef = useRef();
  useFrame((state, delta) => {
    // console.log(camera);
    // state.camera.lookAt(-10, 10, 0);
  });

  const { perfVisible } = useControls({
    perfVisible: true,
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  useHelper(dirRef, THREE.DirectionalLightHelper, 1); // add helper

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
        ref={dirRef}
      />
      <ambientLight intensity={0.5} />

      <Sky sunPosition={sunPosition} />

      {/* <mesh
        scale={40}
        position={[0, 0, 0]}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh> */}

      {/* models */}
      <ICU />
      {/* <Character /> */}
      <MedicalCenter />
      <TV />
      <Equipment />
    </>
  );
}

export default Experience;
