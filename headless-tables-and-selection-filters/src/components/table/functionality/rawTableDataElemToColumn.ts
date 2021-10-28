import { Column } from "react-table";
import { fieldColumnNameMap } from "./fieldToColumnName";

export function rawTableDataElemToColumn<TTableRawArrayElem extends object>(
  exampleRow: TTableRawArrayElem
): Column<TTableRawArrayElem>[] {
  const rv: Column<TTableRawArrayElem>[] = [];
  fieldColumnNameMap.forEach((columnName, field) => {
    if (Object.prototype.hasOwnProperty.call(exampleRow, field)) {
      rv.push({
        Header: columnName,
        accessor: field as keyof TTableRawArrayElem
      });
    }
  });
  return rv;
}
