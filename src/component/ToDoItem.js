import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


import '../sass/main.scss';

class ToDoItem extends Component{

  render(){
    const {userTodo, isCompleted, onChange, id, deleteTask} = this.props;
    const checkStyle =  isCompleted ? 'completed-todo' : 'not-completed-todo';
    return (
      <div className={`container  ${checkStyle}`}>
        <div className='task'>
          <input
            type="checkbox"
            onChange={onChange.bind(this, id)}
            defaultChecked={isCompleted}
          />
          <p className="title">{userTodo}</p>
        </div>

        {/* Delete button */}

        <FontAwesomeIcon
          onClick={deleteTask.bind(this, id)}
          className="remove-icon"
          icon={faTrashAlt}
        />
      </div>
    );
  }
}


export default ToDoItem;
