import React, { FC } from 'react';
import { IUser } from '../../GlobalTypes/types';

import styles from './user-item.module.css';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  const {
    id,
    name,
    address: { city, street },
  } = user;
  return (
    <div onClick={() => onClick(user)} className={styles.user__card}>
      {id}. {name} из города {city}, по улице {street}
    </div>
  );
};

export default UserItem;
