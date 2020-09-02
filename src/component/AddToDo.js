import React, { Component } from 'react';


import '../sass/main.scss';

class AddToDo extends Component{

  render(){
    return(
      <div className='container add-to-do'>
          <form action="">
                <input type="text" placeholder='Add New Task' onChange={this.props.onChange} />
                <input type="submit" value="Add New Task" />
          </form>
      </div>
    )
  }
}

export default AddToDo;
