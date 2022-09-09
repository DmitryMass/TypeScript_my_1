import React, { useState, useEffect } from 'react';
import { getUsers } from '../../Api/Api';
import { IUser } from '../../Components/GlobalTypes/types';
import List from '../../Components/List';
import UserItem from '../../Components/User/UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  async function getUsersEffect() {
    const data = await getUsers();
    setUsers(data);
  }

  useEffect(() => {
    getUsersEffect();
  }, []);

  return (
    <>
      {users.length === 0 && <div>Loading...</div>}
      {users.length > 0 && (
        <List
          items={users}
          renderItem={(user: IUser) => (
            <UserItem
              onClick={(user) => navigate(`/users/${user.id}`)}
              user={user}
              key={user.id}
            />
          )}
        />
      )}
    </>
  );
};

export default UsersPage;
