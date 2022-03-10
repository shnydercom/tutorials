import { Column } from "react-table";
import { fieldColumnNameMap } from "./fieldToColumnName";

export function rawTableDataElemToColumn<TTableRawArrayElem extends object>(
  sourceData: TTableRawArrayElem[]
): Column<TTableRawArrayElem>[] {
  const rv: Column<TTableRawArrayElem>[] = [];
  if (sourceData && sourceData.length > 0) {
    const exampleSourceRow = sourceData[0];
    fieldColumnNameMap.forEach((columnName, field) => {
      if (Object.prototype.hasOwnProperty.call(exampleSourceRow, field)) {
        rv.push({
          Header: columnName,
          accessor: field as keyof TTableRawArrayElem,
        });
      }
    });
  }
  return rv;
}

export function rawTableDataElemToStarWarsColumn<TTableRawArrayElem extends object>(
  sourceData: TTableRawArrayElem[]
): Column<TTableRawArrayElem>[] {
  const rv: Column<TTableRawArrayElem>[] = [];
  if (sourceData && sourceData.length > 0) {
    const exampleSourceRow = sourceData[0];
    fieldColumnNameMap.forEach((columnName, field) => {
      if (Object.prototype.hasOwnProperty.call(exampleSourceRow, field)) {
        rv.push({
          Header: columnName,
          accessor: field as keyof TTableRawArrayElem,
          //...(field === "__typename" && {Cell:  }) //TODO: add cell type dynamically
        });
      }
    });
  }
  return rv;
}
