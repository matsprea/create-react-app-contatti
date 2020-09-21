import React from 'react';
import './App.css';

const Contatti = (props) => {
  const { persone } = props;
  
  return (
    <ul>
      {persone.map((persona) => (
        <li key={persona}>{persona}</li>
      ))}
    </ul>
  );
};

function App() {

  return (
    <div className="App">
      <Contatti persone={['Matteo', 'Silvia']} />
      <Contatti persone={['Daniele', 'Marco']} />
    </div>
  );
}

export default App;
