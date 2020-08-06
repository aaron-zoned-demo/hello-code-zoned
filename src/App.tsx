import React, { useState } from 'react';
import TodoList from './TodoList'
import { ITodo } from './types'
import './App.css';

const initialTodos = [
  { id: 0, text: 'Make a demo app', done: true },
  { id: 1, text: 'Explain firebase', done: true }
]

function App() {
  const [todos, updateTodos] = useState<ITodo[]>(initialTodos)
  function handleAddTodo(text: string) {
    const newTodo: ITodo = {
      id: todos.length,
      text,
      done: false
    }
    updateTodos([...todos, newTodo])
  }
  function handleRemoveTodo(id: number) {
    updateTodos(todos.filter(t => t.id !== id))
  }
  function handleUpdateTodoText(id: number, text: string) {
    updateTodos(todos.map(t => t.id === id ? { id, text, done: false } : t))
  }
  function handleUpdateTodoDone(id: number, done: boolean) {
    updateTodos(todos.map(t => t.id === id ? { id, text: t.text, done } : t))
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoList
          todos={todos}
          onAddTodo={handleAddTodo}
          onRemoveTodo={handleRemoveTodo}
          onUpdateTodoText={handleUpdateTodoText}
          onUpdateTodoDone={handleUpdateTodoDone}
        />
      </header>
    </div>
  );
}

export default App;
