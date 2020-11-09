import React from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import BuildContainer from './components/BuildContainer';
import {Route, Switch, withRouter} from 'react-router-dom';
import PlanningContainer from './components/PlanningContainer';
import StartContainer from './components/StartContainer';
import ForumContainer from './components/ForumContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "contentContainer">
        <Navigation />
        <Switch>
          <Route path = '/start' component = {StartContainer} />
          <Route path = '/planning' component = {PlanningContainer} />
          <Route path = '/build' component = {BuildContainer} />
          <Route path = '/forum' component = {ForumContainer} />
        </Switch>
        
      </div>
      
    </div>
  );
}

export default App;
