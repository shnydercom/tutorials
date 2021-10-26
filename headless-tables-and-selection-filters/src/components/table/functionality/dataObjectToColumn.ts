import { Column } from "react-table";
import { fieldColumnNameMap } from "./fieldToColumnName";

export function dataObjectToColumn<TDataObj extends object>(
  exampleRow: TDataObj
): Column<TDataObj>[] {
  const rv: Column<TDataObj>[] = [];
  fieldColumnNameMap.forEach((columnName, field) => {
    if (Object.prototype.hasOwnProperty.call(exampleRow, field)) {
      rv.push({
        Header: columnName,
        accessor: field as keyof TDataObj
      });
    }
  });
  return rv;
}
