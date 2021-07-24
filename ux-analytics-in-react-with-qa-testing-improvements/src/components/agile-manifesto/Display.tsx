import { AgileManifestoContent } from "../../data/AgileManifestoInterfaces";
import { AgileManifestoAuthorNamesAsList } from "./AuthorsNamesAsList";
import { AgileManifestoValuePropositionsAsList } from "./ValuePropositionsAsList";

export interface AgileManifestoDisplayProps {
    content: AgileManifestoContent;
}

export const AgileManifestoDisplay = (props: AgileManifestoDisplayProps) => {
    return (
        <>
            <h1>{props.content.heading}</h1>
            <p>{props.content.intro}</p>
            <AgileManifestoValuePropositionsAsList 
                content={props.content.valueProclamations}
            />
            <p>{props.content.closingStatement}</p>
            <AgileManifestoAuthorNamesAsList
                content={props.content.authorNames}/>
        </>
    );
}