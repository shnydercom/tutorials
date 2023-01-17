export const JSONViewer = (objectToDisplay: any) => {
  let displayText: string = "no object to display";
  try {
    displayText = JSON.stringify(objectToDisplay, null, 2);
  } catch (error) {
    displayText = error
      ? `full error: ${error}`
      : "an error occured without error details";
  }
  return <div className="json-viewer"><span>{displayText}</span></div>;
};
