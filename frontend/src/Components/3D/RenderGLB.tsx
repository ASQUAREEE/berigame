import { useGLTF } from "@react-three/drei";
import React from "react";
import { Suspense, useMemo } from "react";

const RenderGLB = ({ url, onClick = null, position, objRef}) => {
  const { scene } = useGLTF(url);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  return (
    <Suspense fallback={null}>
      <primitive
        ref={objRef}
        object={copiedScene}
        onClick={onClick}
        position={position}
      />
    </Suspense>
  );
};

export default RenderGLB;
