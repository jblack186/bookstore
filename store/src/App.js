import {Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home';
import Card from './CardCarousel';

function App() {
  return (
    <div className="App">
      
        <Route exact path='/home' render={(props) => { return <Home {...props} />}} />
        <Route exact path='/card' render={(props) => { return <Card {...props} />}} />

      
    </div>
  );
}

export default App;
