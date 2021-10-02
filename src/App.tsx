import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './views/login';
import Home from './views/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">首页</Link>
          <Link to="/login">登录</Link>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
