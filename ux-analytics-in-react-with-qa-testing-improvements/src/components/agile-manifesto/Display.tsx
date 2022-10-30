import { AgileManifestoContent } from "../../content-data/AgileManifestoInterfaces";
import { AgileManifestoAuthorNamesAsList } from "./AuthorsNamesAsList";
import { AgileManifestoValueProclamationsAsCards } from "./ValueProclamationsAsCards";
import { AgileManifestoValueProclamationsAsList } from "./ValueProclamationsAsList";

export interface AgileManifestoDisplayProps {
  content: AgileManifestoContent;
  isDense?: boolean;
  className?: string;
}

export const AgileManifestoDisplay = (props: AgileManifestoDisplayProps) => {
    const cssClassName = `manifesto ${props.isDense ? "dense" : ""} ${props.className ? props.className : ""}`;
  return (
    <section className={cssClassName}>
      <header>
        <h1>{props.content.heading}</h1>
        <p>{props.content.intro}</p>
      </header>
      {props.isDense ? (
        <AgileManifestoValueProclamationsAsList
          content={props.content.valueProclamations}
          valueSeparator={<> </>}
        />
      ) : (
        <AgileManifestoValueProclamationsAsCards
          content={props.content.valueProclamations}
          valueSeparator={<br />}
        />
      )}
      <div className="vh-centered-container">
        <p className="vh-centered">{props.content.closingStatement}</p>
      </div>
      <AgileManifestoAuthorNamesAsList
        isSmaller={props.isDense}
        content={props.content.authorNames}
      />
      <footer className="vh-centered-container">
        <p className="vh-centered">{props.content.copyrightStatement}</p>
      </footer>
    </section>
  );
};
