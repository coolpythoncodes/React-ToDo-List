import React, { Component } from 'react';


import '../sass/main.scss';

class ToDoItem extends Component{
    // constructor(props){
    //     super(props);
    // }
  render(){
    const {title, time, isCompleted} = this.props;
    return(
        
      <div className='container to-do-item'>
            <input type="checkbox" />
            <div>
                <p className='title'>{title}</p>
                <p className='time'>{time}</p>
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
