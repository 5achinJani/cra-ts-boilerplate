import React from 'react';

import { UserListContainer } from 'containers/UserListContainer';
import { StyledUserListPage } from 'styled/UserListPage';

export const UserListPage: React.FC = () => {
  return (
    <StyledUserListPage>
      {/* <Header /> */}
      <div className="content-area">
        <UserListContainer />
      </div>
    </StyledUserListPage>
  );
};
