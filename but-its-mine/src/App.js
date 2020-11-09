import React from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import BuildContainer from './components/BuildContainer';
import {Route, Switch, withRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "contentContainer">
        <Navigation />
        <Switch>
          <Route path = '/build' component = {BuildContainer} />
        </Switch>
        
      </div>
      
    </div>
  );
}

export default App;
