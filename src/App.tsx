import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';

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
