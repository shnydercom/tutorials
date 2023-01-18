import { Canvas } from "@react-three/fiber";
import { useXR, Controllers } from "@react-three/xr";
import { XR, ARButton } from "@react-three/xr/dist/XR";
import React from "react";

export function useIsXRSubComponent() {
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
  const handleXRSessionstart = () => {
    document.body.classList.add("remove-background");
  };
  const handleXRSessionEnd = () => {
    document.body.classList.remove("remove-background");
  };
  return (
    <>
      {isXRSubcomponent ? (
        props.children
      ) : (
        <>
          <ARButton
            onError={(e) => console.error(e)}
            sessionInit={{
              requiredFeatures: ["local", "hit-test"],
              optionalFeatures: ["dom-overlay", "dom-overlay-for-handheld-ar"],
              domOverlay: { root: document.body },
            }}
          />
          <Canvas className="xr-canvas">
            <XR
              onSessionStart={handleXRSessionstart}
              onSessionEnd={handleXRSessionEnd}
            >
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
