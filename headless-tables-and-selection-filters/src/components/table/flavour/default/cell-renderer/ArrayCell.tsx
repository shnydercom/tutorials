import { DefaultBodyCellCreatorFn } from "../DefaultBodyCellCreatorFn";
import GQLTypeRenderer from "../gql-type-renderer/GQLTypeRenderer";

export interface ArrayCellProps {
  value: unknown[];
}

const arrayCountI18n = (a: unknown[]) => {
  if (a.length === 0) return "none";
  return `details (${a.length})`;
};

export const ArrayCell = (props: React.PropsWithChildren<ArrayCellProps>) => {
  const { children, value, ...remainingProps } = props;
  const cellText = arrayCountI18n(value);
  return (
    <td {...remainingProps}>
      <span>{cellText}</span>
      {value.length
        ? value.map((arrayElem) => {
            return <GQLTypeRenderer value={arrayElem} />;
          })
        : null}
    </td>
  );
};
