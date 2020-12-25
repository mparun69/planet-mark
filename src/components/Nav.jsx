import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Nav = () => {

    return (
        <div className="Nav">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/favs">
                    <li>Favorites</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;