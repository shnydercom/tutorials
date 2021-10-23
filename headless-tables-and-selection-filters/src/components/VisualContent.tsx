import { useGetAllHerosQuery } from "../generated/graphql";
import { JSONViewer } from "./json-viewer/JSONViewer";

export const VisualContent = () => {
  const allHerosResult = useGetAllHerosQuery();
  return (
    <div>
      <JSONViewer objectToDisplay={allHerosResult.data} />
    </div>
  );
};
