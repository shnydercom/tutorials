import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CRAAppHeader } from "./components/CRAAppHeader";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <div className="App">
        <CRAAppHeader />
        <Switch>
          <Route path="/userpage">
            <UserPage />
          </Route>
          <Route path="/analytics">//TODO: empty analytics</Route>
          <Route path="/mixed">//TODO: empty mixed</Route>
          <Route path="/">//TODO: empty mixed</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
