import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { useMount } from 'react-use';
import { Redirect, Route } from 'react-router-dom';

import { rootContext } from 'stores';
import { routes } from 'config/routes_config';

export const PublicRoute: React.FC = observer(props => {
  const {
    AuthStore: { state }
  } = useContext(rootContext);

  useMount(() => {
    // do something here for async check
  });

  /**
   * @description When user is logged in and the
   * user access public routes like login/signup we
   * redirect the user to
   */
  if (state?.data?.token) {
    return <Redirect to={routes.users.path} />;
  }

  return <Route {...props} />;
});
