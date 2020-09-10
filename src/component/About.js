import React from 'react';
import Header from './Header';

import '../sass/main.scss';

const About = () => {
    return (
      <React.Fragment>
        <Header/>
        <div className="container bio">
          <div className="bio-pic">
            <img src="rapture.jpg" alt="" />
          </div>
          <div className="bio-text">
            <p>This project was built by Rapture Chijioke Godson</p>
            <p>You can find more from him via <a href="https://twitter.com/coolpythoncodes">Twitter</a> or <a href="Instagram">Instagram</a></p>
            <p><a href="https://github.com/coolpythoncodes/React-ToDo-List">Source Code</a></p>
          </div>
        </div>
      </React.Fragment>
    );
}

export default About;
