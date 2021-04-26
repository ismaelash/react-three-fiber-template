import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gladiador from "./models3d/Gladiador";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <gridHelper />
          <directionalLight intensity={1} />
          <ambientLight intensity={1} />
          <Gladiador />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
