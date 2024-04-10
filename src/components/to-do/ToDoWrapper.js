import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList'
import { ToDoEdit } from './ToDoEdit';

uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = todo => {
    const newTodo = {id: uuidv4(), item: todo,
    completed: false, isEditing: false};
    setTodos([...todos, newTodo]);
  }

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => todo.id === id ?
    {...todo, completed: !todo.completed} : todo);
    setTodos(updatedTodos);
  }

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const editTodo = id => {
    const updatedTodos = todos.map(todo => todo.id === id ?
    {...todo, isEditing: !todo.isEditing} : todo);
    setTodos(updatedTodos);
  }

  const editItem = (item, id) => {
    const updatedTodos = todos.map(todo => todo.id === id ?
    {...todo, item, isEditing: !todo.isEditing} : todo);
    setTodos(updatedTodos);
  }

  const filteredTodos = todos.filter(todo => {
    switch(filter) {
      case 'complete':
        return todo.completed;
      case 'incomplete':
        return !todo.completed;
      default:
        return true;
    }
  })

  return (
    <div>
        <ToDoForm addTodo={addTodo} />

        <div>
        <ul className="todo-selectors">
          <li onClick={() => setFilter('all')}>all</li>
          <li onClick={() => setFilter('complete')}>complete</li>
          <li onClick={() => setFilter('incomplete')}>incomplete</li>
        </ul>
      </div>
      <hr />
      
        {filteredTodos.map((todo, index) => (
          todo.isEditing ? (
            <ToDoEdit editTodo={editItem} item={todo} />
          ) : (
            <ToDoList item={todo} key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo} />
          )
        ))}

    </div>
  )
}
