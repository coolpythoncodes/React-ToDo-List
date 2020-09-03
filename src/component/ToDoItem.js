import React, { Component } from 'react';


import '../sass/main.scss';

class ToDoItem extends Component{

  render(){
    const {userTodo, isCompleted} = this.props;
    return(
        
      <div className='container to-do-item'>
            <input type="checkbox" />
            <div >
                <p className='title'>{userTodo}</p>
                <p className='time'>10:00 am</p>
            </div>
      </div>
    )
  }
}

// const ToDoItem = (props)=>{
//     return (
//         <div className='container to-do-item'>
//             <input type="checkbox" />
//             <div>
//                 <p className='title'>{props.list.title}</p>
//                 <p className='time'>9:00 am</p>
//             </div>
//         </div>
//     )
// }

export default ToDoItem;
