import React, { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneUser } from '../../Api/Api';
import { IUser } from '../../Components/GlobalTypes/types';

type UserItemPageParams = {
  id: string;
};

const UserItemPage: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<UserItemPageParams>();

  useEffect(() => {
    async function fetchOneUser() {
      try {
        const data = await getOneUser(id);
        setUser(data);
      } catch (e) {
        alert(e);
      }
    }
    fetchOneUser();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {!user && <div>Loading...</div>}
      {user && (
        <>
          <h1>User Page {user?.name}</h1>
          <div>{user?.email}</div>
          <div>
            {user?.address.city} {user?.address.street}
          </div>
        </>
      )}
    </div>
  );
};

export default UserItemPage;
