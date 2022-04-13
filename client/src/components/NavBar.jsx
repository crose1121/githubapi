import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
    <div class="nav">
        <h1 class="nav-title">GitHub API</h1>
        <ul class="nav-links">
            <li><Link to="/"  className="btn btn-info">Home</Link></li>
        </ul>
    </div>
    );
};

NavBar.propTypes = {};

export default NavBar;