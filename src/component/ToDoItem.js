import React, { Component } from 'react';



import '../sass/main.scss';

class ToDoItem extends Component{

  render(){
    const {userTodo, isCompleted, onChange, checked} = this.props;
    const checkStyle =  checked ? 'completed-todo' : 'not-completed-todo';
    return(
        
      <div className={`container  ${checkStyle}`}>
            <input type="checkbox" onChange={onChange} checked={checked} />
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


export default ToDoItem;
