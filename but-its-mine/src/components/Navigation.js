import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        //   activePage: null
        }
      }
    
    // setActivePage = (activePage) => {
    //     this.setState({
    //         activePage
    //     })
    // }

    render() {
        return (
            <div className = 'nav'>
                <h3>Navigation</h3>
                <Link 
                    to = '/' 
                    onClick = {()=>this.props.setActivePage('homepage')}
                    className = {this.props.activePage === 'homepage' ? "active" : null}
                >Homepage</Link>
                <Link 
                    to = '/start' 
                    onClick = {()=>this.props.setActivePage('start')}
                    className = {this.props.activePage === 'start' ? "active" : null}
                >Before you start</Link>
                <Link 
                    to = '/planning' 
                    onClick = {()=>this.props.setActivePage('planning')}
                    className = {this.props.activePage === 'planning' ? "active" : null}
                >Planning</Link>
                <Link 
                    to = '/build' 
                    onClick = {()=>this.props.setActivePage('build')}
                    className = {this.props.activePage === "build" ? "active" : null}
                >Build</Link>
                <Link 
                    to = '/forum' 
                    onClick = {()=>this.props.setActivePage('forum')}
                    className = {this.props.activePage === 'forum' ? "active" : null}
                >Forum</Link>
            </div>
        )
    }
}

export default Navigation;