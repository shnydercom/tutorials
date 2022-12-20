import { ComponentCreatorFnsDictionary } from "../interfaces";
import { XRHeaderCellCreatorFn } from "./XRHeaderCellCreatorFn";
import { XRBodyCellCreatorFn } from "./XRBodyCellCreatorFn";
import { XROutmostRenderer } from "./XROutmostRenderer";
import { XRTable } from "./XRTable";
import { XRTHead } from "./XRTHead";

export const XRComponentCreatorFnsDict: ComponentCreatorFnsDictionary = {
  outmost: (props: React.PropsWithChildren<{}>) => (
    <XROutmostRenderer {...props}></XROutmostRenderer>
  ),
  table: (props: React.PropsWithChildren<{}>) => <XRTable {...props}></XRTable>,
  head: (props: React.PropsWithChildren<{}>) => <XRTHead {...props}></XRTHead>,
  headerRow: (props: React.PropsWithChildren<{}>) => null,
  headerCell: XRHeaderCellCreatorFn,
  body: (props: React.PropsWithChildren<{}>) => null,
  bodyRow: (props: React.PropsWithChildren<{}>) => null,
  bodyCell: XRBodyCellCreatorFn,
};
