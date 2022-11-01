import React from 'react';
import './Data.scss';
import { Link } from "react-router-dom";
import { AiFillSave, AiOutlineClear } from "react-icons/ai";

let records = [];
if (JSON.parse(localStorage.getItem('records')) !== null) {
  records = JSON.parse(localStorage.getItem('records'))
}

function Data({ todos }) {
  const onSaveData = (e) => {
    e.preventDefault();
    records.splice((records.length + 1), 0, todos);
    localStorage.setItem('records', JSON.stringify(records));
    alert('저장되었습니다.');
  }

  const onRemoveData = () => {
    localStorage.clear();
    records = [];
    alert('저장된 기록을 지웠습니다.');
  }

  return (
    <div className='data'>

      <div className='save_btn'>
        <Link to='/result' onClick={onSaveData}><AiFillSave /></Link>
        <span>오늘의 기록을 저장합니다.</span>
      </div>
      <div className='clear_btn'>
        <Link to='' onClick={onRemoveData}><AiOutlineClear /></Link>
        <span>저장된 기록을 모두 지웁니다.</span>
      </div>
    </div >
  )
}

export default Data;