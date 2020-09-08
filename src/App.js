import React, { Component } from 'react';

import Header from './component/Header';
import Info from './component/Info';
import AddToDo from './component/AddToDo';
import TodoListItem from './component/TodoListItem';

import './sass/main.scss';


class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      value: '',
      list: [],
      show: true,
    };

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    const list = window.localStorage.getItem('userTodo') ? JSON.parse(localStorage.getItem('userTodo')) : [];
    this.setState({ list })
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
      checked: false,
    }
    
    // Validate form so user doesn't add an empty to do
    if (this.state.value.trim().length > 0) {
      this.setState({
        list: [newTask, ...this.state.list],
        value: '', // Clear input field
        show: true, // Success message
      }, ()=>{
        window.localStorage.setItem('userTodo', JSON.stringify(this.state.list));
      })
    }

  }
  
  // Handles checkbox
  handleInputChange(id) {
    this.setState({list: this.state.list.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted; 
        // item.checked = !this.state.checked;
    }return item
    })}, ()=>{
      window.localStorage.setItem('userTodo', JSON.stringify(this.state.list));
    })

  }

  // Delete a task
  deleteTask(id){
    this.setState({list: this.state.list.filter(item => item.id !== id )},()=>{
      window.localStorage.setItem('userTodo', JSON.stringify(this.state.list))
    })
    console.log(this.state.list)
  }

  

  render(){
    return(

        <div>
          <Header />
          <Info />
          <AddToDo onChange={this.handleChange} value={this.state.value} onSubmit={this.handleSubmit} />
          <TodoListItem deleteTask={this.deleteTask} onChange={this.handleInputChange} list={this.state.list} />
        </div>

    )
  }
}

export default App;
