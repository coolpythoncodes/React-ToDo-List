import React, { Component } from 'react';

import Header from './component/Header';
import Info from './component/Info';

import './sass/main.scss';
import AddToDo from './component/AddToDo';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Info/>
        <AddToDo/>
      </div>
    )
  }
}

export default App;
