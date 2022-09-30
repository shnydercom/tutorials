import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CRAAppHeader } from "./components/CRAAppHeader";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { ProductTeamPage } from "./pages/ProductTeamPage";
import UserPage from "./pages/UserPage";
import { logDOMevent } from "./analytics/UXEventLoggingAPI";
import { WelcomePage } from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <CRAAppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <WelcomePage />
          </Route>
          <Route path="/userpage">
            <UserPage logDOMeventCallback={logDOMevent} />
          </Route>
          <Route path="/analytics">
            <AnalyticsPage />
          </Route>
          <Route path="/mixed">
            <ProductTeamPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
