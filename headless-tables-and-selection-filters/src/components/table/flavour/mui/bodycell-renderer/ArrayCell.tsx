import { Tooltip } from "@mui/material";
import MuiTableCell, { TableCellProps } from "@mui/material/TableCell";
import GQLTypeRenderer from "../gql-type-renderer/GQLTypeRenderer";
export interface ArrayCellProps {
  value: unknown[];
}

const arrayCountI18n = (a: unknown[]) => {
  if (a.length === 0) return "none";
  return `more (${a.length})`;
};

export const ArrayCell = (props: React.PropsWithChildren<ArrayCellProps>) => {
  const { children, value, ...remainingProps } = props;
  const cellText = arrayCountI18n(value);
  return (
    <Tooltip
      arrow={true}
      title={
        value.length ? (
          <ol>
            {value.map((arrayElem, idx) => {
              return <GQLTypeRenderer key={`gqlt-${idx}`} value={arrayElem} />;
            })}
          </ol>
        ) : null
      }
    >
      <MuiTableCell {...remainingProps}>{cellText}</MuiTableCell>
    </Tooltip>
  );
};
