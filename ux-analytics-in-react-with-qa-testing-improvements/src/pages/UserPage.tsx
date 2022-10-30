import { AgileManifestoDisplay } from "./../components/agile-manifesto/Display";
import { AGILE_MANIFESTO_EN as EN } from "../content-data/agileManifestoEN";
import { AGILE_MANIFESTO_ZH as ZH } from "../content-data/agileManifestoZH";
import { AGILE_MANIFESTO_ES as ES } from "../content-data/agileManifestoES";
import { AGILE_MANIFESTO_FR as FR } from "../content-data/agileManifestoFR";
import { AGILE_MANIFESTO_DE as DE } from "../content-data/agileManifestoDE";
import { logDOMeventCallbackType } from "../analytics/UXEventLoggingAPI";
import { DividerHR } from "./../components/semantic-html/DividerHR";
import { useCallback, useRef, useState } from "react";

interface UserPageProps {
  logDOMeventCallback: logDOMeventCallbackType;
}

type ColorPalette = "dark" | "light";

function UserPage(props: UserPageProps) {
  const { logDOMeventCallback } = props;
  const userPageRef = useRef<HTMLDivElement>(null);
  const [colorMode, setColorMode] = useState<ColorPalette>("dark");

  function switchColors() {
    if (colorMode === "light") {
      setColorMode("dark");
      userPageRef.current?.style.setProperty("color", "white");
      userPageRef.current?.style.setProperty("--base-bgcolor-a", "#00001f");
      userPageRef.current?.style.setProperty("--base-bgcolor-b", "#004000");
      userPageRef.current?.style.setProperty("--base-bgcolor-c", "#270000");
      userPageRef.current?.style.setProperty("--base-bgcolor-d", "#292900");
      userPageRef.current?.style.setProperty("--base-bgcolor-e", "#022f2f");
      logDOMeventCallback("color_palette_changed_to", `${colorMode}`);
      return;
    }
    setColorMode("light");
    userPageRef.current?.style.setProperty("color", "black");
    userPageRef.current?.style.setProperty("--base-bgcolor-a", "#ff6060");
    userPageRef.current?.style.setProperty("--base-bgcolor-b", "#ffc36c");
    userPageRef.current?.style.setProperty("--base-bgcolor-c", "#70ee70");
    userPageRef.current?.style.setProperty("--base-bgcolor-d", "#9ecff6");
    userPageRef.current?.style.setProperty("--base-bgcolor-e", "#92ecec");
  }
  //UX event handling
  function onHRVisible(isVisible: boolean, domElement?: Element) {
    logDOMeventCallback("is_visible_changed_to", `${isVisible}`, domElement);
  }

  return (
    <div className="user-page" ref={userPageRef}>
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
        data-qa-id="button-lightswitch-at-bottom"
        className="toggle-textbutton"
        onClick={(e) => {
          switchColors();
          //functionality can be independent of UX-events
          logDOMeventCallback(
            "on_click",
            e.currentTarget.value,
            e.currentTarget
          );
        }}
      >
        <strong>
          {colorMode === "dark"
            ? "Switch the lights on!"
            : "Switch the lights off!"}
        </strong>
      </button>
      <button
        data-qa-id="button-floating-day-night"
        className="toggle-iconbutton"
        onClick={(e) => {
          switchColors();
          //functionality can be independent of UX-events
          logDOMeventCallback(
            "on_click",
            e.currentTarget.value,
            e.currentTarget
          );
        }}
      >
        <strong>
          {colorMode === "dark"
            ? "☾"
            : "☼"}
        </strong>
      </button>
    </div>
  );
}

export default UserPage;
