import { Link } from "react-router-dom";
import logo from "./../logo.svg";
export const CRAAppHeader = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
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
      <nav>
        <ul>
          <li>
            <Link to="/">Intro/Readme</Link>
          </li>
          <li>
            <Link to="/userpage">First: Users create usage-data</Link>
          </li>
          <li>
            <Link to="/analytics">Then: Analysts check every detail</Link>
          </li>
          <li>
            <Link to="/mixed">Finally: Make informed Product decisions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
