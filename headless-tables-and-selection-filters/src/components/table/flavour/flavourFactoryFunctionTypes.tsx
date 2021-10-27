import {
  Cell,
  Column,
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
} from "react-table";

export type FactoryFnsFromRTtoWidget<TSourceDataElem extends object> =
  | FactoryFnForOutmost
  | FactoryFnForTableRoot<TSourceDataElem>
  | FactoryFnForHeaderGroups<TSourceDataElem>
  | FactoryFnForHeaderGroup<TSourceDataElem>
  | FactoryFnForHeadCell<TSourceDataElem>
  | FactoryFnForBody<TSourceDataElem>
  | FactoryFnForRows<TSourceDataElem>
  | FactoryFnForRow<TSourceDataElem>
  | FactoryFnForCell<TSourceDataElem>;

//----------------------table root------------------------------------------
/**
 * Function type e.g. for a <thead> element
 */
export interface FactoryFnForOutmost {
  (props: React.PropsWithChildren<{}>): JSX.Element;
}
/**
 * Function type for a root table element, accepts the getTableProps-funciton from the useTable-hook
 */
export interface FactoryFnForTableRoot<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      getTableProps: (
        propGetter?: TablePropGetter<TSourceDataElem> | undefined
      ) => TableProps;
    }>
  ): JSX.Element;
}

//----------------------table header------------------------------------------
/**
 * Function type e.g. for a <thead> element
 */
export interface FactoryFnForHeaderGroups<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      headerGroups: HeaderGroup<TSourceDataElem>[];
    }>
  ): JSX.Element;
}
/**
 * Function type e.g. for a row in a table head or also table head cells and rows
 */
export interface FactoryFnForHeaderGroup<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      headerGroup: HeaderGroup<TSourceDataElem>;
    }>
  ): JSX.Element;
}

/**
 * Function type e.g. for a column cell in a table head
 */
export interface FactoryFnForHeadCell<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      column: Column<TSourceDataElem>;
    }>
  ): JSX.Element;
}

//----------------------table body------------------------------------------

/**
 * Function type e.g. for a <tbody> element
 */
export interface FactoryFnForBody<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      getTableBodyProps: (
        propGetter?: TableBodyPropGetter<TSourceDataElem>
      ) => TableBodyProps;
      rows: Row<TSourceDataElem>[];
    }>
  ): JSX.Element;
}

/**
 * Function type e.g. for a <tbody> element
 */
export interface FactoryFnForRows<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      rows: Row<TSourceDataElem>[];
    }>
  ): JSX.Element;
}

/**
 * Function type e.g. for a row in the table body
 */
export interface FactoryFnForRow<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      row: Row<TSourceDataElem>;
    }>
  ): JSX.Element;
}

/**
 * Function type e.g. for a cell in a row in the table body
 */
export interface FactoryFnForCell<TSourceDataElem extends object> {
  (
    props: React.PropsWithChildren<{
      cell: Cell<TSourceDataElem>;
    }>
  ): JSX.Element;
}
