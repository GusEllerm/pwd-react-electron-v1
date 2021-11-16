import logo from './logo.svg';
import './App.css';
import React from 'react';

// Required to use window.require as require() for some reason conflicts
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>{
          ipcRenderer.send("general-error")
        }} >Wow</button>
      </header>
    </div>
  );
}

export default App;
