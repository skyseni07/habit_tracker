import React from 'react';
import Card from '../shared/Card';
import './TodoTemplate.scss';

function TodoTemplate({ children }) {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <Card>
      <div className='header'>
        <div className='title'>
          <p>Today's</p>
          <p>To Do List</p>
        </div>
        <div className='date'>
          <div className='left_col'>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
          </div>
          <div className='right_col'>
            <div className='day'>{day}</div>
          </div>
        </div>
      </div>
      <div className='content'>{children}</div>
    </Card>
  )
}

export default TodoTemplate;