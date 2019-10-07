import React from 'react';
import Nav from './components/Nav';
import logo from './logo.svg';
import './App.css';
import Box from "./Components/Box";
import Wrapper from "./Components/Wrapper";

function App() {
  const [/*selectedType,*/ updateSelectedType] = React.useState('All');

  function changeType(type){
      updateSelectedType(type);

  }
  return (
    <div className="App">
      <Nav fnc={changeType}/>
      <Wrapper/>
    </div>
  );
}

export default App;
