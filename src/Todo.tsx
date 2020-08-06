import React from 'react';
import './App.css';

interface Props {
  id: number
  text: string
  done: boolean
  onRemove: (id: number) => void
  onChangeText: (id: number, text: string) => void
  onChangeDone: (id: number, done: boolean) => void
}

const Todo: React.SFC<Props> = ({
  id,
  text,
  done,
  onRemove,
  onChangeText,
  onChangeDone,
}) => {
  return (
    <li className="Todo">
      <input type="text" name="text" onChange={e => onChangeText(id, e.target.value)} value={text} />
      <input type="checkbox" name="done" onChange={e => onChangeDone(id, e.target.checked)} checked={done} />
      <button className="btn btn-danger" onClick={() => onRemove(id)}>🗑️</button>
    </li>
  );
}

export default Todo;
