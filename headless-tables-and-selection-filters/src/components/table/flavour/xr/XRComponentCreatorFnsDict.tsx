import { FlavourComponentsDictionary } from "../interfaces";
import { XRHeaderCellCreatorFn } from "./XRHeaderCellCreatorFn";
import { XRBodyCellCreatorFn } from "./XRBodyCellCreatorFn";
import { XROutmostRenderer } from "./XROutmostRenderer";
import { XRTable } from "./XRTable";
import { XRTHead } from "./XRTHead";

export const XRComponentCreatorFnsDict: FlavourComponentsDictionary = {
  Outmost: (props: React.PropsWithChildren<{}>) => (
    <XROutmostRenderer {...props}></XROutmostRenderer>
  ),
  Table: (props: React.PropsWithChildren<{}>) => <XRTable {...props}></XRTable>,
  Head: (props: React.PropsWithChildren<{}>) => <XRTHead {...props}></XRTHead>,
  HeaderRow: (props: React.PropsWithChildren<{}>) => null,
  HeaderCell: XRHeaderCellCreatorFn,
  Body: (props: React.PropsWithChildren<{}>) => null,
  BodyRow: (props: React.PropsWithChildren<{}>) => null,
  BodyCell: XRBodyCellCreatorFn,
};
