import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <h1>But It's Mine</h1>
            {props.currentUser ?
                <div className='userWelcome'>
                    <p>Welcome, {props.currentUser}</p>
                    <div>
                        <Link to='/profile'><button>Profile</button></Link>
                        <button onClick={props.handleLogout}>Logout</button>
                    </div>
                </div>
            :
                <Link to='/login'><button>Login/Register</button></Link>
            }
        </div>
    )
}

export default Header;