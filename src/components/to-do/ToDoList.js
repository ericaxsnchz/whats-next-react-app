import React from 'react'

export const ToDoList = ({item, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="todo-list">
      <p onClick={() => toggleComplete(item.id)}
       className={`${item.completed ? 'completed' : ""}`}>{item.item}</p>

      <div>
        
      </div>

    </div>
  )
}
