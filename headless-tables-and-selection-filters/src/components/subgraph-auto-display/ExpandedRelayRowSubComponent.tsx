import React from "react";
import { JSONViewer } from "../json-viewer/JSONViewer";
import { TableSubComponentType } from "../table";
import { useFlavour } from "../table/flavour/useFlavour";

export const ExpandedRelayRowSubComponent: TableSubComponentType = ({
  row,
}) => {
  const {
    Body: TableBody,
    BodyCell: TableCell,
    BodyRow: TableRow,
    Head: TableHead,
    HeaderCell: TableHeaderCell,
    HeaderRow: TableHeaderRow,
    Outmost,
    Table: TableRoot,
  } = useFlavour();
  const numberOfCells = row.cells.length;
  return (
    <TableRow>
      {row.cells[0] && (
        <>
          {row.cells[0].render("Cell", {
            //we can use "cells" as the API states that those are only the visible cells: https://react-table-v7.tanstack.com/docs/api/useTable#row-properties
            colSpan: numberOfCells,
            //table DOM nesting rules needs to be observed, so our content goes into a cell in a row
            children: <JSONViewer objectToDisplay={row.original}/>,
          })}
        </>
      )}
    </TableRow>
  );
};
