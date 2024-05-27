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
import FirstAid from "./models/FirstAid";
import DoctorChair from "./models/DoctorChair";
import Ceiling from "./models/Ceiling";
import Floor from "./models/Floor";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import Closet from "./models/Closet";

extend({ RectAreaLightHelper });
function Experience() {
  const { camera, gl } = useThree();
  const dirRef = useRef();
  const spotRef = useRef();
  const spotRef1 = useRef();
  const spotRef2 = useRef();
  const spotRef3 = useRef();
  const spotRef4 = useRef();
  useFrame((state, delta) => {
    // console.log(camera);
    // console.log(state.camera.position);
    // dirRef.current.lookAt([10, 0, 0]);
  });

  const { perfVisible } = useControls({
    perfVisible: true,
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  useHelper(dirRef, THREE.DirectionalLightHelper, 1); // add helper
  // useHelper(spotRef, RectAreaLightHelper, 1);
  // useHelper(spotRef1, RectAreaLightHelper, 1);
  // useHelper(spotRef2, RectAreaLightHelper, 1);
  // useHelper(spotRef3, RectAreaLightHelper, 1);
  // useHelper(spotRef4, RectAreaLightHelper, 1);

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault maxDistance={33} />

      {/* <directionalLight
        castShadow
        position={[1, 5, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
        ref={dirRef}
      /> */}
      {/* <spotLight
        castShadow
        position={[23, 10, 13]}
        intensity={1.5}
        shadow-normalBias={0.04}
        ref={dirRef}
      /> */}
      <ambientLight intensity={0.5} />
      <rectAreaLight
        width={23}
        height={0.5}
        color={"white"}
        intensity={50}
        position={[9, 16, 12]}
        ref={spotRef}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <rectAreaLight
        width={23}
        height={0.5}
        color={"white"}
        intensity={50}
        position={[9, 16, -11]}
        ref={spotRef1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <rectAreaLight
        width={0.5}
        height={23}
        color={"white"}
        intensity={50}
        position={[-2, 16, 0]}
        ref={spotRef2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <rectAreaLight
        width={0.5}
        height={23}
        color={"white"}
        intensity={50}
        position={[19.5, 16, 0]}
        ref={spotRef3}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <rectAreaLight
        width={0.5}
        height={16}
        color={"white"}
        intensity={50}
        position={[-11, 16, -8]}
        ref={spotRef3}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <rectAreaLight
        width={0.3}
        height={16}
        color={"white"}
        intensity={100}
        position={[-16, 16, 10]}
        ref={spotRef3}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <Sky sunPosition={sunPosition} />

      {/* <mesh
        scale={60}
        position={[0, 0.07, 0]}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color={"gray"} />
      </mesh> */}

      {/* models */}
      <ICU />
      {/* <Character /> */}
      <MedicalCenter />
      <TV />
      {/* <Equipment /> */}
      <FirstAid />
      <DoctorChair />
      <Ceiling />
      <Floor />
      <Closet />
    </>
  );
}

export default Experience;
