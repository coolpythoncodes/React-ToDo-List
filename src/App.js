import React, { Component } from 'react';

import Header from './component/Header';
import Info from './component/Info';

import './sass/main.scss';
import AddToDo from './component/AddToDo';
import TodoListItem from './component/TodoListItem';

const list = [
  {
    id:1,
    title: 'Go fishing with Stephen',
    time: '9:00 am',
    isCompleted: false,
  },
  {
    id:2,
    title: 'Meet according with design team',
    time: '10:00 am',
    isCompleted: true,

  }
]

class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {list}
  // }
  state= {list:list};
  onChange = (e)=>{
    console.log(e.target.value)
}
  render(){
    return(
      <div>
        <Header/>
        <Info/>
        <AddToDo onChange={this.onChange}/>
        <TodoListItem list={this.state.list}/>
      </div>
    )
  }
}

export default App;
