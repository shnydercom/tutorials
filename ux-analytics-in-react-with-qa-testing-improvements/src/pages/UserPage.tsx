import { AgileManifestoDisplay } from "./../components/agile-manifesto/Display";
import { AGILE_MANIFESTO_EN as EN } from "./../data/agileManifestoEN";
import { AGILE_MANIFESTO_ZH as ZH } from "./../data/agileManifestoZH";
import { AGILE_MANIFESTO_ES as ES } from "./../data/agileManifestoES";
import { AGILE_MANIFESTO_FR as FR } from "./../data/agileManifestoFR";
import { AGILE_MANIFESTO_DE as DE } from "./../data/agileManifestoDE";
import { logDOMevent } from "../analytics/UXEventLoggingAPI";
import { DividerHR } from "./../components/semantic-html/DividerHR";

function UserPage() {
  function onHRVisible(isVisible: boolean, domElement?: Element) {
    logDOMevent("is_visible_changed_to", `${isVisible}`, domElement);
  }
  return (
    <div className="user-page">
      <AgileManifestoDisplay content={EN} />
      <DividerHR onVisibilityChanged={onHRVisible} elementId="end-of-english" />
      <AgileManifestoDisplay content={ZH} isDense={true} className="ttb" />
      <DividerHR onVisibilityChanged={onHRVisible} elementId="end-of-chinese" />
      <AgileManifestoDisplay content={ES} />
      <DividerHR onVisibilityChanged={onHRVisible} elementId="end-of-spanish" />
      <AgileManifestoDisplay content={FR} />
      <DividerHR onVisibilityChanged={onHRVisible} elementId="end-of-french" />
      <AgileManifestoDisplay content={DE} isDense={true} />
      <DividerHR onVisibilityChanged={onHRVisible} elementId="end-of-german" />
      <button
        data-qa-id="the-end-button"
        onClick={(e) =>
          logDOMevent("on_click", e.currentTarget.value, e.currentTarget)
        }
      >
        <strong>This clickable element marks the end.</strong>
      </button>
    </div>
  );
}

export default UserPage;
