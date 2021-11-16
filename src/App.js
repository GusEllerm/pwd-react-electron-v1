import './App.css';
import React from 'react';
import {HashRouter,Route,Routes} from "react-router-dom";
import GraphViewer from './components/graph_viewer';
import CWLGenerator from './components/cwl_generator';
import CodeViewer from './components/code_viewer';
import Home from './components/home';

// Required to use window.require as require() for some reason conflicts
// const electron = window.require('electron');

const App = (props)=> {
  return (

    <HashRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/CodeViewer" element={<CodeViewer/>}/>
        <Route exact path="/CWLGenerator" element={<CWLGenerator/>}/>
        <Route exact path="/GraphViewer" element={<GraphViewer/>}/>
      </Routes>   
    </div>
    </HashRouter>    
  );
}

export default App;
