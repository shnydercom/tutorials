import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CRAAppHeader } from "./components/CRAAppHeader";
import { DataNerdPage } from "./pages/DataNerdPage";
import { ProductTeamPage } from "./pages/ProductTeamPage";
import UserPage from "./pages/UserPage";
import { WelcomePage } from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <CRAAppHeader />
        <Switch>
          <Route path="/userpage">
            <UserPage />
          </Route>
          <Route path="/analytics">
            <DataNerdPage />
          </Route>
          <Route path="/mixed">
            <ProductTeamPage />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
