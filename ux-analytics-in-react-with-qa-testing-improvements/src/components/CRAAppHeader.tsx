import { Link, useLocation } from "react-router-dom";
import logo from "./../logo.svg";
export const CRAAppHeader = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="cra-rotator">
        <p>
          ...just another <br /> <code>create-react-app</code>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={pathName === "/" ? "current" : "other"} to="/">
              Read me: Intro
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/userpage" ? "current" : "other"}
              to="/userpage"
            >
              Be a user: Create usage-data
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/analytics" ? "current" : "other"}
              to="/analytics"
            >
              Be an analyst: Check usage-event timings
            </Link>
          </li>
          <li>
            <Link
              className={pathName === "/mixed" ? "current" : "other"}
              to="/mixed"
            >
              Finally: Make informed Product decisions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
