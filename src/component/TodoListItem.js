import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

import '../sass/main.scss';

class ToDoListItem extends Component{

  render(){
    const {list, onChange, deleteTask} = this.props;
    return(
        <div>
            {list.map((todo)=>{
                return (
                    <ToDoItem 
                        key={todo.id}
                        userTodo={todo.userTodo} 
                        isCompleted={todo.isCompleted}
                        onChange={onChange}
                        id={todo.id}
                        deleteTask={deleteTask}
                        
                    />
                )
            })}

        </div>
    )
  }
}


export default ToDoListItem;
