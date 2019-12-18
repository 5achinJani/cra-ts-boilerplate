import { createBrowserHistory } from 'history';

import { routes as routes_config, IRoutesConfig } from 'config/routes_config';
import { UserListPage } from 'pages/UserListPage';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routes_config.index.id]: {
    ...routes_config.index,
    component: UserListPage
  },
  [routes_config.users.id]: {
    ...routes_config.users,
    component: UserListPage
  },
  [routes_config.user_details.id]: {
    ...routes_config.user_details,
    component: UserListPage
  },
  [routes_config.private_route_example.id]: {
    ...routes_config.private_route_example,
    component: UserListPage
  },
  [routes_config.static_page_route_example.id]: {
    ...routes_config.static_page_route_example,
    component: UserListPage
  }
};
