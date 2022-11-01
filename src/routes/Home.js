import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import Data from '../components/Data';

function Home() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동 30분',
      checked: true,
    },
    {
      id: 2,
      text: '개발 공부하기',
      checked: true,
    },
    {
      id: 3,
      text: '청소하기',
      checked: false,
    },
  ])


  if (localStorage.getItem('toDoLists') === 'null' || localStorage.getItem('toDoLists') === '[]') {
    const 텍스트모음 = [];
    todos.map(todo => (
      텍스트모음.push(todo.text)
    ));
    localStorage.setItem('toDoLists', JSON.stringify(텍스트모음));
  }

  const nextId = useRef(4);

  const onAdd = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    }
    , [todos]
  )

  const onCheck = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      )
    }
    , [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(
        todos.filter(todo => todo.id !== id)
      )
    }
    , [todos]
  )

  return (
    <TodoTemplate>
      <TodoAdd onAdd={onAdd} />
      <TodoList
        todos={todos}
        onCheck={onCheck}
        onRemove={onRemove}
      />
      <Data todos={todos} />
    </TodoTemplate>
  )
}

export default Home;
