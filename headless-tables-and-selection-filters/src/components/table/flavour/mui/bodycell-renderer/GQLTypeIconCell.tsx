import {
  Android,
  EmojiPeople,
  Flight,
  FlightTakeoff,
  Hiking,
  PrecisionManufacturing,
  RunCircle,
} from "@mui/icons-material";
import MuiTableCell, { TableCellProps } from "@mui/material/TableCell";
import { useMemo } from "react";
import { StarWarsTechnicalTypes } from "../../../../../starwarsDataSourceInterfaces";

function getIconComp(input: StarWarsTechnicalTypes) {
  switch (input) {
    case StarWarsTechnicalTypes.Droid:
      return Android;
    case StarWarsTechnicalTypes.Human:
      return EmojiPeople;
    case StarWarsTechnicalTypes.Starship:
      return FlightTakeoff
    default:
      break;
  }
  return input
}

export interface GQLTypeIconCellProps extends TableCellProps {
  value: StarWarsTechnicalTypes;
}

export const GQLTypeIconCell = (
  props: React.PropsWithChildren<GQLTypeIconCellProps>
) => {
  const IconComponent = useMemo(() => getIconComp(props.value), [props.value])
  return <MuiTableCell {...props}>
    <IconComponent/>
    <small>{props.children}</small>
  </MuiTableCell>;
};
/*Android;
EmojiPeople;
Flight;
SmartToy;
Satellite;
RunCircle;
PrecisionManufacturing;
Hiking;
FlightTakeoff;*/
