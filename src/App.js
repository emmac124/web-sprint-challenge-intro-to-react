import React from 'react';
import Character0 from './components/Character0';
import Character1 from './components/Character1';
import Character2 from './components/Character2';
import Character3 from './components/Character3';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
      <section>
        <div className="App">
          <h1 className="Header">On The Look Out!</h1>
        </div>
        <div className='main-content'>
          <Character0 /> <Character1 /> <Character2 /> <Character3 />
        </div>
      </section>
  );
}

export default App;

