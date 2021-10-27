import React from "react";
import { rtAPIObjToColumn } from "./functionality/rtAPIObjToColumn";

//initialize the known Columns
import { initKnownTableColumns } from "./config/initknownTableColumns";
import { TableViewerOptions } from "./config/interfaces";
import { SimpleTableLayout } from "./layout/SimpleTableLayout";
import { muiTablePartFactories } from "./flavour/mui/MuiTablePartFactories";
import { SortingTableLayout } from "./layout/SortingTableLayout";

//setup config
initKnownTableColumns(true);

export interface TableViewerProps<TQueryData, TArrayElem, TRow> {
  queryData: TQueryData;
  options: TableViewerOptions<TQueryData, TArrayElem, TRow>;
}

export const TableViewer: <TQueryData, TArrayElem, TRow extends object = {}>(
  props: TableViewerProps<TQueryData, TArrayElem, TRow>
) => JSX.Element = ({ queryData, options }) => {
  // assign the dynamic data handling
  const data = React.useMemo(
    () => options.rowArrayAccessor(queryData).map(options.rowTransformation),
    [options, queryData]
  );
  // assign the declarative part
  const columns = React.useMemo(() => [...rtAPIObjToColumn(data[0])], [data]);
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h4>default style</h4>
          </td>
          <td>
            <h4>MUI style</h4>
          </td>
        </tr>
        <tr>
          <td>
            <SimpleTableLayout
              columns={columns}
              data={data}
              factories={options.tablePartFactories}
            />
          </td>
          <td>
            <SimpleTableLayout
              columns={columns}
              data={data}
              factories={muiTablePartFactories}
            />
          </td>
        </tr>
        <tr>
          <td>
            <SortingTableLayout
              columns={columns}
              data={data}
              factories={options.tablePartFactories}
            />
          </td>
          <td>
            <SortingTableLayout
              columns={columns}
              data={data}
              factories={muiTablePartFactories}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
