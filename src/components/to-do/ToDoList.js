import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';


export const ToDoList = ({item, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="todo-list">
      <p onClick={() => toggleComplete(item.id)}
       className={`${item.completed ? 'completed' : ""}`}>{item.item}</p>

      <div>
        <FontAwesomeIcon icon={faFilePen}
          onClick={() => editTodo(item.id)} />

        <FontAwesomeIcon icon={faSquareMinus}
          onClick={() => deleteTodo(item.id)} />

      </div>
    </div>
  )
}
