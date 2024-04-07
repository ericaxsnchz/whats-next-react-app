import React, { useState } from 'react'

export const ToDoEdit = ({editTodo, item}) => {
  const [value, setValue] = useState(item.item);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, item.id)
    setValue('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" 
        className="todo-input"
        placeholder="update item"
        onChange={(e) => setValue(e.target.value)} />

        <button type="submit" className="todo-btn">
          update
        </button>
    </form>
  )
}
