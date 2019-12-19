import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { useMount } from 'react-use';
import { Redirect, Route } from 'react-router-dom';

import { rootContext } from 'stores';
import { routes } from 'config/routes_config';

export const PrivateRoute: React.FC = observer(props => {
  const {
    AuthStore: { state }
  } = useContext(rootContext);

  useMount(() => {
    // do something here for async check
  });

  if (state?.data?.token) {
    return <Route {...props} />;
  }

  return <Redirect to={routes.index.path} />;
});
