import { TablePartFactories } from "../../config/interfaces";
import { DefaultCellContainerFactory } from "./cell/DefaultCellContainer";
import { DefaultHeadContainerFactory } from "./head/DefaultHeadContainer";
import { DefaultOutmostContainerFactory } from "./outmost/DefaultOutmostContainer";
import { DefaultRowContainerFactory } from "./row/DefaultRowContainer";
import { DefaultTableContainerFactory } from "./table/DefaultTableContainer";

export type DefaultTablePartFactoriesType = TablePartFactories<
  DefaultOutmostContainerFactory,
  DefaultTableContainerFactory,
  DefaultHeadContainerFactory,
  DefaultRowContainerFactory,
  DefaultCellContainerFactory
>;

export const defaultTablePartFactories: DefaultTablePartFactoriesType = {
  outmostContainer: new DefaultOutmostContainerFactory(),
  table: new DefaultTableContainerFactory(),
  head: new DefaultHeadContainerFactory(),
  row: new DefaultRowContainerFactory(),
  cell: new DefaultCellContainerFactory(),
};
