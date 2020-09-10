import React, { Component } from 'react';

import AddToDo from './component/AddToDo';
import Header from './component/Header';
import Info from './component/Info';
import TodoListItem from './component/TodoListItem';
import About from './component/About'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './sass/main.scss';


class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      value: '',
      list: [],
      showAlertMessage: false,
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

    // this.setState({showAlertMessage: !showAlertMessage,})
  }

  // Delete a task
  deleteTask(id){
    this.setState({
      showAlertMessage: !this.state.showAlertMessage,
      list: this.state.list.filter(item => item.id !== id )},()=>{
      window.localStorage.setItem('userTodo', JSON.stringify(this.state.list))
    })
  }

  

  render(){
    return(

        <div>
          <Router>
            <Switch>
            <Route exact path='/' render={
              ()=> 
                <React.Fragment>
                  <Header />
                  <Info />
                  <AddToDo onChange={this.handleChange} value={this.state.value} onSubmit={this.handleSubmit} />
                  <TodoListItem deleteTask={this.deleteTask} onChange={this.handleInputChange} list={this.state.list} />

                </React.Fragment>  
            }/>
            <Route path='/about' component={About}/>
            </Switch>
          </Router>
        </div>

    )
  }
}

export default App;
