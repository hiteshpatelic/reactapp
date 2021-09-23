import { Login } from "./components/superAdmin/authorization/login/login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Dashboard } from "./components/superAdmin/dashboard/dashboard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Redirect from="/" to="/login"/>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
