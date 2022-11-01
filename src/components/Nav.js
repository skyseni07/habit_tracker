import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";
import Home from '../routes/Home';

function Nav() {
  const onCheckLocalStorageEmpty = (e) => {
    if (localStorage.getItem('records') === null
      || localStorage.getItem('records') === undefined) {
      e.preventDefault();
      alert('저장된 기록이 없습니다.')
    } else if (localStorage.getItem('toDoLists') === 'null'
      || localStorage.getItem('toDoLists') === '[]') {
      e.preventDefault();
      alert('직접 입력을 클릭해서 할 일을 추가하세요! 목록별 달성률을 확인할 수 있습니다.')
    }
  }

  return (
    <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/result' onClick={onCheckLocalStorageEmpty}>RECORD</Link>
    </div>
  )
}

export default Nav;