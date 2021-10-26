import { TablePartFactories } from "../../config/interfaces";
import { MuiBodyContainerFactory } from "./body/MuiBodyContainer";
import { MuiCellContainerFactory } from "./cell/MuiCellContainer";
import { MuiHeadContainerFactory } from "./head/MuiHeadContainer";
import { MuiOutmostContainerFactory } from "./outmost/MuiOutmostContainer";
import { MuiRowContainerFactory } from "./row/MuiRowContainer";
import { MuiTableContainerFactory } from "./table/MuiTableContainer";

export type MuiTablePartFactoriesType = TablePartFactories<
  MuiOutmostContainerFactory,
  MuiTableContainerFactory,
  MuiHeadContainerFactory,
  MuiBodyContainerFactory,
  MuiRowContainerFactory,
  MuiCellContainerFactory
>;

export const muiTablePartFactories: MuiTablePartFactoriesType = {
  outmostContainer: new MuiOutmostContainerFactory(),
  table: new MuiTableContainerFactory(),
  head: new MuiHeadContainerFactory(),
  body: new MuiBodyContainerFactory(),
  row: new MuiRowContainerFactory(),
  cell: new MuiCellContainerFactory(),
};
