import { useMemo } from "react";
import { StarWarsTechnicalTypes } from "../../../../../starwarsDataSourceInterfaces";

function getIconComp(input: StarWarsTechnicalTypes) {
  switch (input) {
    case StarWarsTechnicalTypes.Droid:
      return "🤖";
    case StarWarsTechnicalTypes.Human:
      return "🦸";
    case StarWarsTechnicalTypes.Starship:
      return "🚀";
    default:
      break;
  }
  return input;
}

export interface GQLTypeIconCellProps {
  value: StarWarsTechnicalTypes;
}

export const GQLTypeIconCell = (
  props: React.PropsWithChildren<GQLTypeIconCellProps>
) => {
  const emojiIcon = useMemo(() => getIconComp(props.value), [props.value]);
  return (
    <td {...props}>
      {emojiIcon}&nbsp;
      <small>{props.children}</small>
    </td>
  );
};
