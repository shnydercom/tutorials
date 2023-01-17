import { Canvas } from "@react-three/fiber";
import { useXR, Controllers  } from "@react-three/xr";
import { XR, ARButton } from "@react-three/xr/dist/XR";
import React from "react";

function useIsXRSubComponent() {
  try {
    useXR();
  } catch (error) {
    return false;
  }
  return true;
}

export const XROutmostRenderer: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  const isXRSubcomponent = useIsXRSubComponent();
  return (
    <>
      {isXRSubcomponent ? (
        props.children
      ) : (
        <>
          <ARButton onError={(e) => console.error(e)} />
          <Canvas className="xr-canvas">
            <XR>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} />
              <Controllers />
              {props.children}
            </XR>
          </Canvas>
        </>
      )}
    </>
  );
};
