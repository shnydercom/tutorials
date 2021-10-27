import { TablePartFactories } from "../../config/interfaces";
import { MuiBodyContainerFactory } from "./body/MuiBodyContainer";
import { MuiCellContainerFactory } from "./cell/MuiCellContainer";
import { MuiHeaderCellContainerFactory } from "./cell/MuiHeaderCellContainer";
import { MuiHeadContainerFactory } from "./head/MuiHeadContainer";
import { MuiOutmostContainerFactory } from "./outmost/MuiOutmostContainer";
import { MuiHeaderRowContainerFactory } from "./row/MuiHeaderRowContainer";
import { MuiRowContainerFactory } from "./row/MuiRowContainer";
import { MuiTableContainerFactory } from "./table/MuiTableContainer";

export type MuiTablePartFactoriesType = TablePartFactories<
  MuiOutmostContainerFactory,
  MuiTableContainerFactory,
  MuiHeadContainerFactory,
  MuiHeaderRowContainerFactory,
  MuiHeaderCellContainerFactory,
  MuiBodyContainerFactory,
  MuiRowContainerFactory,
  MuiCellContainerFactory
>;

export const muiTablePartFactories: MuiTablePartFactoriesType = {
  outmostContainer: new MuiOutmostContainerFactory(),
  table: new MuiTableContainerFactory(),
  head: new MuiHeadContainerFactory(),
  headerRow: new MuiHeaderRowContainerFactory(),
  headerCell: new MuiHeaderCellContainerFactory(),
  body: new MuiBodyContainerFactory(),
  row: new MuiRowContainerFactory(),
  cell: new MuiCellContainerFactory(),
};
