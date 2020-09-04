import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

import '../sass/main.scss';

class ToDoListItem extends Component{
    // constructor(props){
    //     super(props);
    // }
  render(){
    const {list, checked, onChange} = this.props;
    return(
        <div>
            {list.map((todo)=>{
                return (
                    <ToDoItem 
                        key={todo.id}
                        userTodo={todo.userTodo} 
                        isCompleted={todo.isCompleted}
                        checked={checked}
                        onChange={onChange}
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
