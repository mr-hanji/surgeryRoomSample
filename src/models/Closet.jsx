import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function Closet({}) {
  //   const closet = useGLTF("/closet/scene.gltf");
  const closet = useGLTF("/closet.glb");

  const [closetTexture] = useTexture(["/closet/textures/metal.jpg"]);

  useEffect(() => {
    closet.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        // child.material = new MeshStandardMaterial({ map: closetTexture });
        // child.material = new MeshStandardMaterial({ color: "red" });
      }
    });
  }, [closet]);

  return (
    <>
      <primitive
        object={closet.scene}
        scale={5}
        // position={[0, 5, 0]}
        position={[-50, -18.5, 18]}
        // rotation-y={Math.PI}
      />
    </>
  );
}

// useGLTF.preload("/closet/scene.gltf");
useGLTF.preload("/closet.glb");
