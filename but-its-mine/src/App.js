import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import BuildContainer from './components/Build/BuildContainer';
import {Route, Switch, withRouter} from 'react-router-dom';
import PlanningContainer from './components/Planning/PlanningContainer';
import StartContainer from './components/Start/StartContainer';
import ForumContainer from './components/Forum/ForumContainer';
import Homepage from './components/Homepage';
import BudgetTool from './components/Planning/BudgetTool';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: ''
    }
  }

  setActivePage = (activePage) => {
    this.setState({
        activePage
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className = "contentContainer">
          <Navigation setActivePage={this.setActivePage} activePage={this.state.activePage}/>
          <Switch>
            <Route exact path = '/' component = {Homepage} />
            <Route path = '/start' component = {StartContainer} />
            <Route exact path = '/planning' component = {PlanningContainer} />
            <Route path = '/planning/budget-tool' component = {BudgetTool} />
            <Route path = '/build' component = {BuildContainer} />
            <Route path = '/forum' component = {ForumContainer} />
          </Switch>
          
        </div>
        
      </div>
    );
  }
}

export default App;
