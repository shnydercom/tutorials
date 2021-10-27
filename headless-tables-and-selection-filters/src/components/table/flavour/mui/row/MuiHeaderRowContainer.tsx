import { AbstractTablePartFactory } from "../../AbstractTablePartFactory";
import { FactoryFnForHeaderGroup } from "../../flavourFactoryFunctionTypes";
import { MuiRowContainer } from "./MuiRowContainer";

export class MuiHeaderRowContainerFactory extends AbstractTablePartFactory {
  generateWidget: FactoryFnForHeaderGroup<any> = ({ headerGroup, children }) => {
    const newProps = { children };
    return <MuiRowContainer {...newProps} />;
  };
}
