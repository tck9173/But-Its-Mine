import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className = 'nav'>
            <h3>Navigation</h3>
            <Link 
                to = '/' 
                onClick = {()=>props.setActivePage('homepage')}
                className = {props.activePage === 'homepage' ? "active" : null}
            >Homepage</Link>
            <Link 
                to = '/start' 
                onClick = {()=>props.setActivePage('start')}
                className = {props.activePage === 'start' ? "active" : null}
            >Before you start</Link>
            <Link 
                to = '/planning' 
                onClick = {()=>props.setActivePage('planning')}
                className = {props.activePage === 'planning' ? "active" : null}
            >Planning</Link>
            <Link 
                to = '/build' 
                onClick = {()=>props.setActivePage('build')}
                className = {props.activePage === "build" ? "active" : null}
            >Build</Link>
            <Link 
                to = '/forum' 
                onClick = {()=>props.setActivePage('forum')}
                className = {props.activePage === 'forum' ? "active" : null}
            >Forum</Link>
        </div>
    )
}

export default Navigation;