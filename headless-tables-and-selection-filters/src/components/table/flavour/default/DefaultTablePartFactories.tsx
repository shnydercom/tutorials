import { TablePartFactories } from "../../config/interfaces";
import { DefaultBodyContainerFactory } from "./body/DefaultBodyContainer";
import { DefaultCellContainerFactory } from "./cell/DefaultCellContainer";
import { DefaultHeadContainerFactory } from "./head/DefaultHeadContainer";
import { DefaultOutmostContainerFactory } from "./outmost/DefaultOutmostContainer";
import { DefaultRowContainerFactory } from "./row/DefaultRowContainer";
import { DefaultTableContainerFactory } from "./table/DefaultTableContainer";

export type DefaultTablePartFactoriesType = TablePartFactories<
  DefaultOutmostContainerFactory,
  DefaultTableContainerFactory,
  DefaultHeadContainerFactory,
  DefaultBodyContainerFactory,
  DefaultRowContainerFactory,
  DefaultCellContainerFactory
>;

export const defaultTablePartFactories: DefaultTablePartFactoriesType = {
  outmostContainer: new DefaultOutmostContainerFactory(),
  table: new DefaultTableContainerFactory(),
  head: new DefaultHeadContainerFactory(),
  body: new DefaultBodyContainerFactory(),
  row: new DefaultRowContainerFactory(),
  cell: new DefaultCellContainerFactory(),
};
