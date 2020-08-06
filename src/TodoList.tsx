import React from 'react';
import Todo from './Todo'
import { ITodo } from './types'
import './App.css';

interface Props {
  todos: ITodo[]
  onAddTodo: (text: string) => void
  onRemoveTodo: (id: number) => void
  onUpdateTodoText: (id: number, text: string) => void
  onUpdateTodoDone: (id: number, done: boolean) => void
}

const TodoList: React.SFC<Props> = ({
  todos,
  onAddTodo,
  onRemoveTodo,
  onUpdateTodoText,
  onUpdateTodoDone,
}) => {

  return (
    <div className="TodoList">
      <h2>Todo for Codezoned</h2>
      <ul>
        {todos.map(({ id, text, done }) => {
          return (
            <Todo
              key={id}
              id={id}
              text={text}
              done={done}
              onChangeText={onUpdateTodoText}
              onChangeDone={onUpdateTodoDone}
              onRemove={onRemoveTodo}
            />
          )
        })}
      </ul>
      <button className="btn btn-primary" onClick={() => onAddTodo("")}>Add Todo</button>
    </div>
  );
}

export default TodoList;
