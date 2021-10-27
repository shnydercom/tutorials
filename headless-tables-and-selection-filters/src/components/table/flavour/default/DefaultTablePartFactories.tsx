import { TablePartFactories } from "../../config/interfaces";
import { DefaultBodyContainerFactory } from "./body/DefaultBodyContainer";
import { DefaultCellContainerFactory } from "./cell/DefaultCellContainer";
import { DefaultHeaderCellContainerFactory } from "./cell/DefaultHeaderCellContainer";
import { DefaultHeadContainerFactory } from "./head/DefaultHeadContainer";
import { DefaultOutmostContainerFactory } from "./outmost/DefaultOutmostContainer";
import { DefaultHeaderRowContainerFactory } from "./row/DefaultHeaderRowContainer";
import { DefaultRowContainerFactory } from "./row/DefaultRowContainer";
import { DefaultTableContainerFactory } from "./table/DefaultTableContainer";

export type DefaultTablePartFactoriesType = TablePartFactories<
  DefaultOutmostContainerFactory,
  DefaultTableContainerFactory,
  DefaultHeadContainerFactory,
  DefaultHeaderRowContainerFactory,
  DefaultHeaderCellContainerFactory,
  DefaultBodyContainerFactory,
  DefaultRowContainerFactory,
  DefaultCellContainerFactory
>;

export const defaultTablePartFactories: DefaultTablePartFactoriesType = {
  outmostContainer: new DefaultOutmostContainerFactory(),
  table: new DefaultTableContainerFactory(),
  head: new DefaultHeadContainerFactory(),
  headerRow: new DefaultHeaderRowContainerFactory(),
  headerCell: new DefaultHeaderCellContainerFactory(),
  body: new DefaultBodyContainerFactory(),
  row: new DefaultRowContainerFactory(),
  cell: new DefaultCellContainerFactory(),
};
