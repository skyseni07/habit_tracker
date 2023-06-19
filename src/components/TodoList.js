import React from 'react';
import './TodoList.scss';
import TodoObject from './TodoObject';

function TodoList({ todos, onCheck, onRemove }) {
  return (
      <div className='TodoList'>
        {todos.map(todo => (
          <TodoObject
            todo={todo}
            key={todo.id}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        ))}
      </div>
  )
}

export default TodoList;