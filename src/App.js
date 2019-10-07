import React from 'react';
import data from './Data';
import './App.css';
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper funkos={data}/>
    </div>
  );
}

export default App;
