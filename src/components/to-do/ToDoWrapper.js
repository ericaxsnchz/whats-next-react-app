import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList'
import { ToDoEdit } from './ToDoEdit';

uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), item: todo,
    completed: false, isEditing: false}]);
    console.log(todos);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ?
    {...todo, complete: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ?
    {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editItem = (item, id) => {
    setTodos(todos.map(todo => todo.id === id ?
    {...todo, item, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div>
        <ToDoForm addTodo={addTodo} />

        {todos.map((todo, index) => (
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
