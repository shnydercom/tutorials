import { FactoryFnsFromRTtoWidget } from "./flavourFactoryFunctionTypes";

/**
 * generates React Elements with the help of data from react-table
 */
export abstract class AbstractTablePartFactory {
  /**
   * Generates React container widgets from react-table:
   * column(s), row(s), headerGroup(s) and useTable-propGetters for <table> and <tbody>
   */
  abstract generateWidget: FactoryFnsFromRTtoWidget<any>;
}
