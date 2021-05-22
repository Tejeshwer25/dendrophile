import "./App.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Administration from "./components/Administration/Administration";
import AddCompany from "./components/AddCompany/AddCompany";
import ViewCompany from "./components/ViewCompany/ViewCompany";
import SavedEnv from "./components/SavedEnvironment/SavedEnv";
import ViewAnalysis from "./components/ViewAnalysis/ViewAnalysis";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app__main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/admin">
            <Administration />
          </Route>
          <Route path="/addcompany">
            <AddCompany />
          </Route>
          <Route exact path="/viewcompany">
            <ViewCompany name="Company's Data" />
          </Route>

          <Route exact path="/savedEnvironmentAdmin">
            <SavedEnv />
          </Route>

          <Route exact path="/viewAdminAnalysis">
            <ViewAnalysis />
          </Route>

          <Route exact path="/viewAdmin">
            <ViewCompany name="Nirma" />
          </Route>

          <Route exact path="/viewCompanyAnalysis">
            <ViewAnalysis />
          </Route>

          <Route exact path="/savedEnvironmentCompany">
            <SavedEnv />
          </Route>

          <Route path="/">
            <Form />
          </Route>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
