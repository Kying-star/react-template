import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "./router/route"

function App() {
  console.log(router)
  return (
    <Router className="App">
      <div className="App-header">
        <Switch>
          {
            router.map(e=>{
              return (
                  <Route exact path={e.path} component={e.component}>
                  </Route>
              )
            })
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;