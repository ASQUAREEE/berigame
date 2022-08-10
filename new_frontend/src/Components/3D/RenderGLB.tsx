import { useGLTF } from "@react-three/drei";
import React from "react";
import { Suspense, useMemo } from "react";

const RenderGLB = ({ url, onClick = null, position }) => {
  const { scene } = useGLTF(url) as any;
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  return (
    <Suspense fallback={null}>
      <primitive
        object={copiedScene}
        onClick={onClick}
        position={position}
      />
      ;
    </Suspense>
  );
};

export default RenderGLB;
