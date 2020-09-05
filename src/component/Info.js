import React from 'react';

import moment from 'moment'; // handles time

const Info = () => {
    const date = moment().format(" MMMM Do YYYY");
    const day = moment().format("dddd")

    return (
        <section className='info container'>
            <h1>My To-Do List</h1>
            <small>Today, {date}</small>
            <p>Schedule {day}'s activities</p>
        </section>
    );
}

export default Info;
