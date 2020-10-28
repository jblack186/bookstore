import {Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home';

function App() {

  return (
    <div className="App">
      
        <Route exact path='/home' render={(props) => { return <Home {...props} />}} />

      
    </div>
  );
}

export default App;
