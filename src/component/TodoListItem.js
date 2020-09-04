import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

import '../sass/main.scss';

class ToDoListItem extends Component{

  render(){
    const {list, onChange} = this.props;
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
                    />
                )
            })}

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

export default ToDoListItem;
