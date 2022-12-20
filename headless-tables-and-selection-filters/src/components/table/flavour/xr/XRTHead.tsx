import React from "react";
import { Plane } from "@react-three/drei";

export const XRTHead: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <><Plane position={[0, 0.6, - 1]} scale={[0.5,0.5,1]}/>{props.children}</>;
}
