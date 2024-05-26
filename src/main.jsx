import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";
import { Leva } from "leva";
import { Provider } from "react-redux";
import LoadingBar from "./LoadingBar"; // Import the LoadingBar component
//test

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Leva collapsed />
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
      gl={{
        antialias: false,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
      flat
      shadows
    >
      {/* <color args={['#ff0000']} attach="background"/> */}
      <Suspense fallback={<LoadingBar />}>
        <Experience />
      </Suspense>
    </Canvas>
  </React.StrictMode>
);
