import {
  Android,
  EmojiPeople,
  FlightTakeoff,
} from "@mui/icons-material";
import MuiTableCell, { TableCellProps } from "@mui/material/TableCell";
import { useMemo } from "react";
import { StarWarsTechnicalTypes } from "../../../domain-information";

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
