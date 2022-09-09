import React, { FC } from 'react';
import { ITodo } from '../../GlobalTypes/types';

import styles from './todo-item.module.css';
interface TodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  const { id, completed, title } = todo;
  return (
    <div
      onClick={() => onClick(todo)}
      className={completed ? styles.todo__done : styles.todo}
    >
      {id}.{title}
    </div>
  );
};

export default TodoItem;
