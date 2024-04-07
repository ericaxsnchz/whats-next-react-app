import React, { useState } from 'react'

export const ToDoForm = ({addTodo}) => {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <div>
      <div className="todoForm">
        <form className="todo-form" onSubmit={handleSubmit}>
              <input 
              type="text" 
              className="todo-input"
              value={value}
              placeholder="what's next for today?"
              onChange={(e) => setValue(e.target.value)} />
              <button type="submit" className="todo-btn">
                  add task
              </button>
          </form>
      </div>

      <ul>
        <li>all</li>
        <li>complete</li>
        <li>incomplete</li>
      </ul>

    </div>
  )
}
