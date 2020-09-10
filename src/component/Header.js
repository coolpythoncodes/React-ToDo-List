import React from 'react';
import {Link} from 'react-router-dom';


import '../sass/main.scss';

const Header = () => {
    return (
        <header>
          <nav className="container">
            <h1>
              <Link to="/">To-Do List</Link>
            </h1>
            <Link to="/about">About</Link>
          </nav>
        </header> 
    );
}

export default Header;
