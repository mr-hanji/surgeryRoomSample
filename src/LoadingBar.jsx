import React from "react";
import { Html, useProgress } from "@react-three/drei";

function LoadingBar() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loading-container">
        <div className="loading-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-text">{progress.toFixed(2)}% loaded</div>
    </Html>
  );
}

export default LoadingBar;
