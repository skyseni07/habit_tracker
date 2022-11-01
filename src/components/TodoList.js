import React from 'react';
import './TodoList.scss';
import TodoObject from './TodoObject';
import styled from "styled-components";

const Nav = styled.nav`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
  }
`;

function TodoList({ todos, onCheck, onRemove }) {
  return (
    <Nav>
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
    </Nav>
  )
}

export default TodoList;