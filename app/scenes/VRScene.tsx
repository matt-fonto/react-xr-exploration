"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useState } from "react";

const store = createXRStore();

export function VRScene() {
  const [red, setRed] = useState(false);

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <XR store={store}>
          <Environment preset="sunset" background />

          <mesh
            pointerEventsType={{ deny: "grab" }}
            onClick={() => setRed(!red)}
            position={[0, 1, -1]}
          >
            <boxGeometry />
            <meshBasicMaterial color={red ? "red" : "blue"} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
