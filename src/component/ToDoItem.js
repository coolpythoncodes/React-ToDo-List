import React, { Component } from 'react';
import PropTypes from 'prop-types';


import '../sass/main.scss';

class ToDoItem extends Component{

  render(){
    const {userTodo, isCompleted, onChange,id} = this.props;
    const checkStyle =  isCompleted ? 'completed-todo' : 'not-completed-todo';
    return(
        
      <div className={`container  ${checkStyle}`}>
            <input type="checkbox" onChange={onChange.bind(this, id)} />
            <div >
                <p className='title'>{userTodo}</p>
                {/* <p className='time'>10:00 am</p> */}
            </div>
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
