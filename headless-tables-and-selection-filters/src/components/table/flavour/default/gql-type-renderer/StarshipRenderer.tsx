import React from "react";
import { Starship } from "../../../../../generated/graphql";

interface StarshipRendererProps {
  value: Starship;
}

export default function StarshipRenderer(props: StarshipRendererProps) {
  const { value } = props;
  if(!value){
    return <>{"no starship data"}</>
  }
  const {name, coordinates, length} = value
  return <ul className="starship">
    <li>{`Name: ${name}`}</li>
    <li>{`Coordinates: ${coordinates?.join("-")}`}</li>
    <li>{`Length: ${length}`}</li>
  </ul>;
}
