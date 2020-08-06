import React, { useState, useContext } from 'react';
import TodoList from './TodoList'
import { ITodo } from './types'
import { useHistory } from 'react-router-dom';
import firebaseContext from './firebaseContext'
import './App.css';

const initialTodos = [
  { id: 0, text: 'Make a demo app', done: true },
  { id: 1, text: 'Explain firebase', done: true }
]

function App({ user, updateUser }: { user: any, updateUser: any }) {
  const [todos, updateTodos] = useState<ITodo[]>(initialTodos)
  const history = useHistory()
  const firebase = useContext(firebaseContext)
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
      {user && (
        <div className="current-user">
          <h2>Logged in as: {user.email}</h2>
          <div><img src={user.photoURL || ''} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></div>
          <button className="btn btn-danger" onClick={() => {
            firebase.auth().signOut()
              .then(() => {
                updateUser(null)
                history.push('/')
              })
              .catch(() => alert('whoops'))
          }}>Sign out</button>
        </div>
      )}
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
