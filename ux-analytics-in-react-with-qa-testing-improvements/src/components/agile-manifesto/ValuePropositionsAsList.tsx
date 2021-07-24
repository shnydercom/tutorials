import { AgileManifestoValueProclamation } from "../../data/AgileManifestoInterfaces";

export interface AgileManifestoValuePropositionsAsListProps {
    content: AgileManifestoValueProclamation[];
}

export const AgileManifestoValuePropositionsAsList = 
        (props:AgileManifestoValuePropositionsAsListProps) => {
    return (<ul>
        {props.content.map(
            (valueProclamation) => (
            <li>
                <span>
                    {valueProclamation.higherValuePart}
                </span>
                <span>
                </span>
                    {valueProclamation.lowerValuePart}
                </li>
                )
        )}
        <li></li>
    </ul>);
}