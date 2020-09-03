import React, { Component } from 'react';

import Header from './component/Header';
import Info from './component/Info';

import './sass/main.scss';
import AddToDo from './component/AddToDo';
import TodoListItem from './component/TodoListItem';


class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      value: '',
      list: [],
    };

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      userTodo: this.state.value,
      isCompleted: false
    }
    
    this.setState({
      list: [newTask, ...this.state.list],
      value: '' // Clear input field
    })  
  }

  render(){
    return(
      <div>
        <Header/>
        <Info/>
        <AddToDo onChange={this.handleChange} value={this.state.value} onSubmit={this.handleSubmit}/>
        <TodoListItem list={this.state.list}/>
      </div>
    )
  }
}

export default App;
