import {Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Home';
import Browse from './Browse';
import Filtered from './Filtered';
import SignIn from './Signin';

function App() {

  return (
    <div className="App">
              <Route exact path='/signIn' render={(props) => { return <SignIn {...props} />}} />

        <Route exact path='/home' render={(props) => { return <Home {...props} />}} />
        <Route exact path='/browse' render={(props) => { return <Browse {...props} />}} />
        <Route exact path='/filtered' render={(props) => { return <Filtered {...props} />}} />


      
    </div>
  );
}

export default App;
