import { AgileManifestoDisplay } from "./components/agile-manifesto/Display";
import { AGILE_MANIFESTO_EN as EN } from "./data/agileManifestoEN";
import { AGILE_MANIFESTO_ZH as ZH } from "./data/agileManifestoZH";
import { AGILE_MANIFESTO_ES as ES } from "./data/agileManifestoES";
import { AGILE_MANIFESTO_FR as FR } from "./data/agileManifestoFR";
import { AGILE_MANIFESTO_DE as DE } from "./data/agileManifestoDE";
import { CRAAppHeader } from "./components/CRAAppHeader";
import { logDOMevent } from "./analytics/UXEventLogging";
import { DividerHR } from "./components/semantic-html/DividerHR";

function App() {
  function onHRVisible(isVisible: boolean, domElement?: Element) {
    logDOMevent("is_visible_changed_to", `${isVisible}`, domElement);
  }
  return (
    <div className="App">
      <CRAAppHeader />
      <AgileManifestoDisplay content={EN} />
      <DividerHR onVisibilityChanged={onHRVisible} />
      <AgileManifestoDisplay content={ZH} isDense={true} className="ttb" />
      <DividerHR onVisibilityChanged={onHRVisible} />
      <AgileManifestoDisplay content={ES} />
      <DividerHR onVisibilityChanged={onHRVisible} />
      <AgileManifestoDisplay content={FR} />
      <DividerHR onVisibilityChanged={onHRVisible} />
      <AgileManifestoDisplay content={DE} isDense={true} />
      <DividerHR onVisibilityChanged={onHRVisible} />
      <button
        onClick={(e) =>
          logDOMevent("on_click", e.currentTarget.value, e.currentTarget)
        }
      >
        You've reached the end.
      </button>
    </div>
  );
}

export default App;
