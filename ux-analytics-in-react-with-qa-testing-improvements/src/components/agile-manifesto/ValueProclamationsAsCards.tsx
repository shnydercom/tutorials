import { AgileManifestoValueProclamation } from "../../data/AgileManifestoInterfaces";

export interface AgileManifestoValueProclamationsAsCardProps {
    content: AgileManifestoValueProclamation[];
    valueSeparator?: React.ReactElement;
}

export const AgileManifestoValueProclamationsAsCards = 
        (props:AgileManifestoValueProclamationsAsCardProps) => {
    return (<div className="cards-container">
        {props.content.map(
            (valueProclamation, idx) => (
            <div className="transparent-card" key={`vpC${idx}`}>
                <span className="elevated-text">
                    {valueProclamation.higherValuePart}
                </span>
                {props.valueSeparator}
                <span>
                </span>
                    {valueProclamation.lowerValuePart}
                </div>
                )
        )}
    </div>);
}