import React from 'react';
import { IUser } from 'types';

type IProps = {
  data: IUser;
  onUserSelect: (params: { user_id: number }) => void;
};

export const UserCard: React.FC<IProps> = () => {
  return (
    <div className="user-card">
      This contains user details
      <div className="user-name">Walter White</div>
      <div className="user-address">308 Negra Arroyo Lane</div>
    </div>
  );
};
