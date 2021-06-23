import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "./router/route"
import Home from "./view/Home"
import About from "./view/About";
import Users from "./view/Users";

function App() {
  console.log(router)
  return (
    <Router className="App">
      <div className="App-header">
        <Switch>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/users" component={Users}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;