import { Column } from "react-table";
import { fieldColumnNameMap } from "./fieldToColumnName";

export function rtAPIObjToColumn<TrtAPIObj extends object>(
  exampleRow: TrtAPIObj
): Column<TrtAPIObj>[] {
  const rv: Column<TrtAPIObj>[] = [];
  fieldColumnNameMap.forEach((columnName, field) => {
    if (Object.prototype.hasOwnProperty.call(exampleRow, field)) {
      rv.push({
        Header: columnName,
        accessor: field as keyof TrtAPIObj
      });
    }
  });
  return rv;
}
