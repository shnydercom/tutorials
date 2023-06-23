export interface JSONViewerProps {
  objectToDisplay: unknown
}
export const JSONViewer = (props: JSONViewerProps) => {
  let displayText: string = "no object to display";
  try {
    displayText = JSON.stringify(props.objectToDisplay, null, 2);
  } catch (error) {
    displayText = error
      ? `full error: ${error}`
      : "an error occured without error details";
  }
  return <div className="json-viewer"><span>{displayText}</span></div>;
};
