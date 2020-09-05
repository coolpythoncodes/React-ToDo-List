import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


import '../sass/main.scss';

class ToDoItem extends Component{

  render(){
    const {userTodo, isCompleted, onChange, id, deleteTask} = this.props;
    const checkStyle =  isCompleted ? 'completed-todo' : 'not-completed-todo';
    return(
        
      <div className={`container  ${checkStyle}`}>
            <input type="checkbox" onChange={onChange.bind(this, id)} />
            <div >
                <p className='title'>{userTodo}</p>
                {/* <p className='time'>10:00 am</p> */}
            </div>

            {/* Delete button */}
            <button onClick={deleteTask.bind(this, id)}><FontAwesomeIcon className='remove-icon' icon={faTrashAlt} /></button>
            

      </div>

        // <div className={`container ${toDoStyle}`}>
        //     <input type="checkbox" />
        //     <div >
        //         <p className='title'>Meeting with Boss</p>
        //         <p className='time'>10:00 am</p>
        //     </div>
        // </div>
    )
  }
}

ToDoItem.propTypes = {
    isCompleted: PropTypes.bool,
    userTodo: PropTypes.string,
}

export default ToDoItem;
