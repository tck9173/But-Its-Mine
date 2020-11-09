import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className = 'nav'>
            <h3>Navigation</h3>
            <Link to = '/'>Homepage</Link>
            <Link to = '/start'>Before you start</Link>
            <Link to = '/planning'>Planning</Link>
            <Link to = '/build'>Build</Link>
            <Link to = '/forum'>Forum</Link>
        </div>
    )
}

export default Navigation;