import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Redirect from="/" to="/home" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
