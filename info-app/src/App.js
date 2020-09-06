import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import './App.css';

import UserIndex from "./user/index";
import UserAdd from "./user/add";
import UserEdit from "./user/edit";

function App() {
  return (
      <Router>
        <div>
            <ul>
            <li>
                <Link to="/">用户</Link>
            </li>
            </ul>
            <hr />
            <Switch>
            <Route exact path="/">
                <UserIndex />
            </Route>
            <Route path="/user/add">
              <UserAdd />
            </Route>
            <Route path="/user/:id/edit" render={(props) => <UserEdit {...props} />} />
            </Switch>
        </div>
      </Router>
  )
}

export default App;
