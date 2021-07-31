import { Link } from "react-router-dom";
import logo from "./../logo.svg";
export const CRAAppHeader = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This app is based on <code>create-react-app</code>
      </p>
      &nbsp;
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/userpage">For the Users</Link>
          </li>
          <li>
            <Link to="/analytics">For Data Nerds</Link>
          </li>
          <li>
            <Link to="/mixed">For the Product Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
