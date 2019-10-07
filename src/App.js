import React from 'react';
import Nav from './components/Nav';


function App() {
  const [/*selectedType,*/ updateSelectedType] = React.useState('All');

  return (
    <div >
        <Nav updateType={updateSelectedType}/>
    </div>
  );
}

export default App;
