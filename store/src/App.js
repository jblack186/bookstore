import {Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home';
import Browse from './Browse';

function App() {

  return (
    <div className="App">
      
        <Route exact path='/home' render={(props) => { return <Home {...props} />}} />
        <Route exact path='/browse' render={(props) => { return <Browse {...props} />}} />

      
    </div>
  );
}

export default App;
