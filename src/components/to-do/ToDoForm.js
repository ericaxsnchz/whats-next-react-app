import React, { useState } from 'react'


// allows user to input new to-do tasks
export const ToDoForm = ({addTodo, setFilteredTodos}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <div>
      <div>
        <form className="todo-form" onSubmit={handleSubmit}>
              <input 
              type="text" 
              className="todo-input"
              value={value}
              placeholder="what's next for today?"
              onChange={(e) => setValue(e.target.value)} />
              <button type="submit" className="todo-btn">
                  add item
              </button>
          </form>
          <hr />
      </div>
    </div>
  )
}
