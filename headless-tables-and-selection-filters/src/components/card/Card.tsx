import React from "react";

export const Card = (props: React.PropsWithChildren<{}>) => {
  return <div className="card">{props.children}</div>;
};
