import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import './App.css';

import Header from './components/Header'
import Navigation from './components/Navigation';
import PlanningContainer from './components/Planning/PlanningContainer';
import StartContainer from './components/Start/StartContainer';
import ForumContainer from './components/Forum/ForumContainer';
import HomepageContainer from './components/Homepage/HomepageContainer';
import BudgetTool from './components/Planning/BudgetTool';
import BuildContainer from './components/Build/BuildContainer';

import RegisterForm from './components/Users/RegisterForm';
import LoginForm from './components/Users/LoginForm';

import { registerUser, loginUser, verifyUser } from './services/api_helper';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: 'homepage',
      currentUser: {
        name:""
      }
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({
      currentUser,
      activePage: 'forum'
    })
    this.props.history.push('/forum');
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({
      currentUser,
      activePage: 'forum'
    })
    this.props.history.push('/forum');
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser : {name:null},
      activePage: 'homepage'
    })
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser})
    }
  }

  setActivePage = (activePage) => {
    this.setState({
        activePage
    })
  }

  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser.name} handleLogout={this.handleLogout}/>
        <div className = "contentContainer">
          <Navigation setActivePage={this.setActivePage} activePage={this.state.activePage}/>
          <Switch>
            <Route path = '/login' render={() => (
              <LoginForm handleLogin={this.handleLogin} />
            )} />
            <Route path = '/register' render={() => (
              <RegisterForm handleRegister={this.handleRegister} />
            )} />
            <Route exact path = '/' component = {HomepageContainer} />
            <Route path = '/start' component = {StartContainer} />
            <Route exact path = '/planning' component = {PlanningContainer} />
            <Route path = '/planning/budget-tool' component = {BudgetTool} />
            <Route path = '/build' component = {BuildContainer} />
            <Route path = '/forum' render={() => (
              <ForumContainer currentUser={this.state.currentUser}/>
            )} />
          </Switch>
          
        </div>
        
      </div>
    );
  }
}

export default withRouter(App);
