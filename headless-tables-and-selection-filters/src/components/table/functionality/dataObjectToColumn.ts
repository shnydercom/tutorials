import { Column } from "react-table";
import { fieldColumnNameMap, fieldToColumnName } from "./fieldToColumnName";

export function dataObjectToColumn<TDataObj extends object>(
  exampleRow: TDataObj
): Column<TDataObj>[] {
  const rv: Column<TDataObj>[] = [];
  fieldColumnNameMap.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(exampleRow, key)) {
      rv.push({ Header: fieldToColumnName(key), accessor: key as keyof TDataObj });
    }
  });
  return rv;
}
