import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const fx = () => {
    axios({
      method: 'post',
      url: '/api/login',
      data: {username: 'aioverg', password:123456}
    }).then(function (response) {
      }).catch(error => console.log('error', error))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fx}>点击</button>
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
      </header>
    </div>
  );
}

export default App;
