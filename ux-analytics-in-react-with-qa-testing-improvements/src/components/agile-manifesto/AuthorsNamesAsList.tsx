export interface AgileManifestoAuthorsAsListProps {
  content: string[];
  isSmaller?: boolean;
}

export const AgileManifestoAuthorNamesAsList = (
  props: AgileManifestoAuthorsAsListProps
) => {
  return (
    <ul className={props.isSmaller ? "small-latin-chars" : ""}>
      {props.content.map((author, idx) => (
        <li key={`nLI${idx}`}>{`${author}`}</li>
      ))}
    </ul>
  );
};
