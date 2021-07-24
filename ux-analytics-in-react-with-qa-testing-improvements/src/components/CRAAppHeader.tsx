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
    </header>
  );
};
