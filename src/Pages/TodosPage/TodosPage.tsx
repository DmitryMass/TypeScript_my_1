import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodo } from '../../Api/Api';
import { ITodo } from '../../Components/GlobalTypes/types';
import List from '../../Components/List';
import TodoItem from '../../Components/Todo/TodoItem';

const TodosPage = () => {
  const [todos, setTodo] = useState<ITodo[]>([]);
  const navigate = useNavigate();
  async function fetchTodos() {
    const data = await getTodo();
    setTodo(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {todos.length === 0 && <div>Loading...</div>}
      {todos && (
        <List
          items={todos}
          renderItem={(todo: ITodo) => (
            <TodoItem
              onClick={() => navigate(`/todos/${todo.id}`)}
              todo={todo}
              key={todo.id}
            />
          )}
        />
      )}
    </>
  );
};

export default TodosPage;
