import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { rootContext } from 'stores';
import { useMount } from 'react-use';
import { UserCardSkeleton } from 'components/UserCardSkeleton';
import { UserCard } from 'components/UserCard';

export const UserListContainer: React.FC = observer(() => {
  const {
    UsersStore: { state, onGetUsers, onUserSelect }
  } = useContext(rootContext);
  const {
    ui: { isUsersLoading },
    data: { users }
  } = state;

  useMount(() => {
    onGetUsers();
  });

  return (
    <React.Fragment>
      {isUsersLoading ? (
        <UserCardSkeleton count={5} />
      ) : users?.length ? (
        users.map(user => {
          return (
            <UserCard key={user.id} data={user} onUserSelect={onUserSelect} />
          );
        })
      ) : (
        <div className="user-not-found">No users found</div>
      )}
    </React.Fragment>
  );
});
