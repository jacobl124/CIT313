import React from 'react';
import Nav from './components/Nav';


function App() {
  const [/*selectedType,*/ updateSelectedType] = React.useState('All');

  function changeType(type){
      updateSelectedType(type);

  }

  return (
    <div>
        <Nav fnc={changeType}/>
    </div>
  );
}

export default App;
