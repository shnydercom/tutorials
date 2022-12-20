import React from "react";
import { Plane } from "@react-three/drei";

export const XRTable: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <>
      <Plane position={[0, 0.8, -1.5]} scale={[1, 3, 1]}>
        <meshBasicMaterial color="rgb(255,0,0)" opacity={0.1} />
      </Plane>
      {props.children}
    </>
  );
};
