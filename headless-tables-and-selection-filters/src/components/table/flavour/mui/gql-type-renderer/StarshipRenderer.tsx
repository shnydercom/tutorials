import { Typography } from "@mui/material";
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
  return <li>
    <Typography >{`Name: ${name}`}</Typography>
    <Typography fontStyle="italic">{`Coordinates: ${coordinates?.join("-")}`}</Typography>
    <Typography fontStyle="italic">{`Length: ${length}`}</Typography>
  </li>;
}
