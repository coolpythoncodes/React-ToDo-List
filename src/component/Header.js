import React from 'react';
import '../sass/main.scss';

const Header = () => {
    return (
      <header className="">
        <nav className="container">
          <h1>To-Do List</h1>
          <p>
            <a href="#">About</a> | <a href="#">Clear List</a>
          </p>
        </nav>
      </header>
    );
}

export default Header;
