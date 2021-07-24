export interface AgileManifestoValueProclamation {
    higherValuePart: string;
    lowerValuePart: string;
}

export interface AgileManifestoContent {
    heading: string;
    intro: string;
    valueProclamations: AgileManifestoValueProclamation[];
    closingStatement: string;
    authorNames: string[];
    copyrightStatement: string;
}