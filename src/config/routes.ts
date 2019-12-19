import { createBrowserHistory } from 'history';

import { routes as routes_config, IRoutesConfig } from 'config/routes_config';
import { UserListPage } from 'pages/UserListPage';
import { AboutUs } from 'pages/AboutUs';
import { HomePage } from 'pages/HomePage';
import { UserDetailsPage } from 'pages/UserDetailsPage';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routes_config.index.id]: {
    ...routes_config.index,
    component: HomePage
  },
  [routes_config.users.id]: {
    ...routes_config.users,
    component: UserListPage
  },
  [routes_config.user_details.id]: {
    ...routes_config.user_details,
    component: UserDetailsPage
  },
  [routes_config.static_page_route_example.id]: {
    ...routes_config.static_page_route_example,
    component: AboutUs
  }
};
