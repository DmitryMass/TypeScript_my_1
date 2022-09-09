import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneTodo } from '../../Api/Api';
import { ITodo } from '../../Components/GlobalTypes/types';

type TodoItemPageParams = {
  id: string;
};

const TodoItemPage: FC = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { id } = useParams<TodoItemPageParams>();

  useEffect(() => {
    async function fetchOneTodo() {
      const data = await getOneTodo(id);
      setTodo(data);
    }
    fetchOneTodo();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {todo ? (
        <>
          <h1>
            {todo?.id}. Your Todo {todo?.title}
          </h1>
          <div>Is completed todo ? {todo?.completed ? 'Yes' : 'No'}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TodoItemPage;
