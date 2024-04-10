import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';


export const ToDoList = ({item, toggleComplete, deleteTodo, editTodo}) => {
  const handleToggleComplete = () => {
    toggleComplete(item.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(item.id);
  };

  const handleEditTodo = () => {
    editTodo(item.id);
  };

  return (
    <div className="todo-list">
      {item.completed ? (
        <p className="completed-item">{item.item}</p>
      ) : (
        <p onClick={handleToggleComplete}>{item.item}</p>
      )}

      <div className="update-btn">
        <FontAwesomeIcon icon={faFilePen}
          onClick={handleEditTodo} />

        <FontAwesomeIcon icon={faSquareMinus}
          onClick={handleDeleteTodo} />

      </div>
    </div>
  )
}
