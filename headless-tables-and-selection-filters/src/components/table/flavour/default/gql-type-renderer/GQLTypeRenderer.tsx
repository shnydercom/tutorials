import React from "react";
import StarshipRenderer from "./StarshipRenderer";
import { isStarship } from "./typeguards";

export interface GQLTypeRendererProps {
  value: unknown;
}

export default function GQLTypeRenderer(props: GQLTypeRendererProps) {
  const { value } = props;
  if (!value) return null;
  if(isStarship(value)){
    return <StarshipRenderer value={value}/>
  }
  return null;
}
