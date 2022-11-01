import React from 'react';
import './TodoObject.scss';
import cn from "classnames";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { VscDiffRemoved } from "react-icons/vsc";

function TodoObject({ todo, onCheck, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <div className="todo_object">
      <div className={cn('checkbox', { checked })} onClick={() => onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <VscDiffRemoved />
      </div>
    </div>
  )
}

export default TodoObject;