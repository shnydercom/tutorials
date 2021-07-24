import { AgileManifestoValueProclamation } from "../../data/AgileManifestoInterfaces";

export interface AgileManifestoValueProclamationsAsListProps {
  content: AgileManifestoValueProclamation[];
  valueSeparator: React.ReactElement;
}

export const AgileManifestoValueProclamationsAsList = (
  props: AgileManifestoValueProclamationsAsListProps
) => {
  return (
    <ul>
      {props.content.map((valueProclamation, idx) => (
        <li key={`vpLI${idx}`}>
          <span>{valueProclamation.higherValuePart}</span>
          {props.valueSeparator}
          <span>{valueProclamation.lowerValuePart}</span>
        </li>
      ))}
    </ul>
  );
};
