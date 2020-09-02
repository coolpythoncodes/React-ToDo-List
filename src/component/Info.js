import React from 'react';

const Info = () => {

    const dayOfWeek = new Date().getDay();
    const start = Date.now()
    console.log(start)
    return (
        <section className='info'>
            <h1>My To-Do List</h1>
            <small>Today, Aug 4/2020</small>
            <p>Schedule {dayOfWeek}'s activities</p>
        </section>
    );
}

export default Info;
