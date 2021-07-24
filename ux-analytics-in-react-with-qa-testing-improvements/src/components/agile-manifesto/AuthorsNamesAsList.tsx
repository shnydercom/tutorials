export interface AgileManifestoAuthorsAsListProps {
    content: string[];
}

export const AgileManifestoAuthorNamesAsList = 
        (props:AgileManifestoAuthorsAsListProps) => {
    return (<ul>
        {props.content.map(
            (author) => (
            <li>
                {
                    `${author}`
                }
                </li>
                )
        )}
        <li></li>
    </ul>);
}