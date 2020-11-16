import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    return (
        <div className = 'nav'>
            <Link 
                to = '/' 
                onClick = {()=>props.setActivePage('homepage')}
                className = {props.activePage === 'homepage' ? "active" : null}
            >Homepage</Link>
            <Link 
                to = '/start' 
                onClick = {()=>props.setActivePage('start')}
                className = {props.activePage === 'start' ? "active" : null}
            >Before You Start</Link>
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
                to = {props.currentUser.name ? '/forum' : '/login'} 
                onClick = {()=>props.setActivePage('forum')}
                className = {props.activePage === 'forum' ? "active" : null}
            >Forum</Link>
        </div>
    )
}

export default Navigation;