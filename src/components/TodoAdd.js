import React, { useState, useCallback } from 'react';
import './TodoAdd.scss';
import Modal from 'react-modal';
import { VscDiffRemoved } from "react-icons/vsc";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdArrowDropDown, MdAddBox } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";

// Modal 스타일링
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    border: '1px solid red',
    backgroundColor: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '5px',
    height: '350px',
    width: '250px',
  },
};


function TodoAdd({ onAdd }) {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
      if (e.target.value === "직접입력") {
        openModal()
      };
      
    }
    , []
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (value === '직접입력' || value ==="" ) {
        alert('유효하지 않은 값이 선택되었습니다.')
        return;
      }
      onAdd(value);
    }
    , [onAdd, value]
  )

  //모달창
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let defaultLists;

if (JSON.parse(localStorage.getItem('toDoLists'))  === null) {
  defaultLists = [ "운동 30분", "개발 공부하기","청소하기"]
} else {
  defaultLists = JSON.parse(localStorage.getItem('toDoLists'));
}

  const [toDoLists, setToDoLists] = useState(defaultLists);
  localStorage.setItem('toDoLists', JSON.stringify(toDoLists));

  
  const onRemoveList = (id) => {
    setToDoLists(toDoLists.filter(list => (
      list !== toDoLists[id]
    )))
   
  }

  //모달창 내에서 투두리스트 추가
  const [toDoListValue, setToDoListValue] = useState([]);

  const onChangeToDoList = (e) => {
    setToDoListValue(e.target.value)
    
  }

  const onAddToDoList = (e) => {
    setToDoLists(toDoLists.concat(toDoListValue))
    localStorage.setItem('toDoLists', JSON.stringify(toDoLists))
    setToDoListValue([])
   
  }

  return (
    <div>
      <form className='todo_add' onSubmit={onSubmit}>
        <div className='dropdown'>
          <MdArrowDropDown />
        </div>
        <select onChange={onChange} >
          <option value="" >할 일을 추가하세요.</option>
         
          {
          toDoLists.map((list, index) => (
            <option key={index} value={list.text}>{list}</option>
          ))
          }
          <option value="직접입력">직접 입력</option>
        </select>
        <button type='submit'>
          <MdAddBox />
        </button>
      </form >

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div id='header'>
          <button id='close_btn' onClick={closeModal}>
            <GrFormClose />
          </button>
          <h2>할 일 목록 편집</h2>
        </div>

        <form>
          <div id='add_area'>
            <input
              placeholder='할 일을 추가하세요!'
              value={toDoListValue}
              onChange={onChangeToDoList} />
            <button
              value={toDoListValue}
              onClick={onAddToDoList}>
              <MdAddBox />
            </button>
          </div>

          <div id='content'>
            <ul>
              {toDoLists.map((usedList, index) => (
                <li key={index}>
                  <span>{usedList}</span>
                  <button key={index} onClick={() => onRemoveList(index)}>
                    <VscDiffRemoved />
                  </button>
                </li>))}
            </ul>
          </div>
        </form>
      </Modal>
    </div >
  )
}

export default TodoAdd;
