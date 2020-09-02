import React, { Component } from 'react';

import Header from './component/Header';
import Info from './component/Info';

import './sass/main.scss';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Info/>

      </div>
    )
  }
}

export default App;
