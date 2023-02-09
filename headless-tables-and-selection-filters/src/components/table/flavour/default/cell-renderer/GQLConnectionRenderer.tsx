import React from "react";
import { Cell } from "react-table";
import { GQLConnection } from "../../../domain-information";
import { TableLayoutContext } from "../../../layout";
import GQLTypeRenderer from "../gql-type-renderer/GQLTypeRenderer";

function totalCountI18n<T extends string>(a: GQLConnection<T>) {
  if (a.totalCount === 0) return "none";
  return `total (${a.totalCount})`;
}

interface GQLConnectionExpanderProps {
  isExpanded: boolean;
  onExpand: () => void;
  onUnExpand: () => void;
}

const GQLConnectionExpander: React.FC<GQLConnectionExpanderProps> = (
  props: GQLConnectionExpanderProps
) => {
  return <button onClick={
    () => {
      console.log(props.isExpanded)
      if(props.isExpanded){
        props.onUnExpand();
        return;
      }
      props.onExpand();
    }
  }>{props.isExpanded ? "⧈" : "⧉"}</button>;
};

export interface GQLConnectionRendererProps<T extends string> {
  value: GQLConnection<T>;
  cell?: Cell;
}

export default function GQLConnectionRenderer<T extends string>(
  props: GQLConnectionRendererProps<T>
) {
  const { value, cell } = props;
  const { tableLayoutName } = React.useContext(TableLayoutContext);
  const cellText = totalCountI18n(value);
  return (
    <div>
      <span>{cellText}</span>
      {value.totalCount && <GQLTypeRenderer value={value} />}
      {tableLayoutName === "expandable" && cell && ( <>&nbsp;
        <GQLConnectionExpander
          isExpanded={cell.row.isExpanded}
          onExpand={() => {
            cell.row.toggleRowExpanded(true);
          }}
          onUnExpand={() => {
            cell.row.toggleRowExpanded(false);
          }}
        /></>
      )}
    </div>
  );
}
