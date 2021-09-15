import Navigation from "./components/Navigation";
import Dashboard from "./components/Home";
import PhotoGallery from "./components/PhotoGallery";
import ImportantDates from "./components/ImportantDates";
import Magazines from "./components/Magazines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <Navigation>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/importantdate">
            <ImportantDates />
          </Route>
          <Route exact path="/photogallery">
            <PhotoGallery />
          </Route>
          <Route exact path="/magazines">
            <Magazines />
          </Route>
        </Switch>
      </Navigation>
    </Router>
  );
}

export default App;
