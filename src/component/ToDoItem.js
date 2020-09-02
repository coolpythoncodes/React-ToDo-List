import React, { Component } from 'react';


import '../sass/main.scss';

class ToDoItem extends Component{
  render(){
    return(
      <div className='container to-do-item'>
            <input type="checkbox" />
            <div>
                <p className='title'>Go fishing with Stephen  </p>
                <p className='time'>9:00 am</p>
            </div>
      </div>
    )
  }
}

export default ToDoItem;
