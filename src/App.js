import React from 'react';
import Nav from './components/Nav';


function App() {
  const [selectedType, updateSelectedType] = React.useState('All');

  function changeType(type){
      updateSelectedType(type);

  }

  return (
    <div>
        <Nav fnc={changeType}/>
        <br/>{selectedType}
        <p>
            p<br/>


        </p>
    </div>
  );
}

export default App;
