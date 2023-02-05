import React from "react";
import { GQLConnection } from "../../../domain-information";
import GQLTypeRenderer from "../gql-type-renderer/GQLTypeRenderer";

function totalCountI18n<T extends string>(a: GQLConnection<T>) {
  if (a.totalCount === 0) return "none";
  return `total (${a.totalCount})`;
}

export interface GQLConnectionRendererProps<T extends string> {
  value: GQLConnection<T>;
}

export default function GQLConnectionRenderer<T extends string>(
  props: GQLConnectionRendererProps<T>
) {
  const { value } = props;
  const cellText = totalCountI18n(value);
  return (
    <div>
      <span>{cellText}</span>
      {value.totalCount && <GQLTypeRenderer value={value}/>}
    </div>
  );
}
