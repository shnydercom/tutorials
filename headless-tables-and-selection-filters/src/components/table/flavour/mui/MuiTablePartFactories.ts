import { TablePartFactories } from "../../config/interfaces";
import { MuiCellContainerFactory } from "./cell/MuiCellContainer";
import { MuiHeadContainerFactory } from "./head/MuiHeadContainer";
import { MuiOutmostContainerFactory } from "./outmost/MuiOutmostContainer";
import { MuiRowContainerFactory } from "./row/MuiRowContainer";
import { MuiTableContainerFactory } from "./table/MuiTableContainer";

export type MuiTablePartFactoriesType = TablePartFactories<
  MuiOutmostContainerFactory,
  MuiTableContainerFactory,
  MuiHeadContainerFactory,
  MuiRowContainerFactory,
  MuiCellContainerFactory
>;

export const muiTablePartFactories: MuiTablePartFactoriesType = {
  outmostContainer: new MuiOutmostContainerFactory(),
  table: new MuiTableContainerFactory(),
  head: new MuiHeadContainerFactory(),
  row: new MuiRowContainerFactory(),
  cell: new MuiCellContainerFactory(),
};
