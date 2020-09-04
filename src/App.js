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
      isCompleted: false,
      checked:false,
    };

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(e) {
    this.setState({value:e.target.value})
  }

// Handle submission of user todo item
  handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      userTodo: this.state.value,
      isCompleted: false,
    }
    
    this.setState({
      list: [newTask, ...this.state.list],
      value: '' // Clear input field
    })  
    console.log(this.state.list)
  }

  // Handles checkbox
  handleInputChange(e) {
    this.setState({
      checked: !this.state.checked,

    })
    if (!this.state.checked) console.log('check mate')
    else{
      console.log('not checked')
    }
    
  }

  render(){
    return(
      <div>
        <Header/>
        <Info/>
        <AddToDo onChange={this.handleChange} value={this.state.value} onSubmit={this.handleSubmit}/>
        <TodoListItem checked={this.state.checked} onChange={this.handleInputChange} list={this.state.list}/>
      </div>
    )
  }
}

export default App;
