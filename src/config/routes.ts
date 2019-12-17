import { createBrowserHistory } from 'history';

import { routes as routes_config, IRoutesConfig } from 'config/routes_config';
import { RouteListPage } from 'pages/RouteListPage';
import { RouteTrackerPage } from 'pages/RouteTrackerPage';
import { RouteGuideListPage } from 'pages/RouteGuideListPage';
import { RouteGuideDetailsPage } from 'pages/RouteGuideDetailsPage';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routes_config.index.id]: {
    ...routes_config.index,
    component: RouteListPage
  },
  [routes_config.users.id]: {
    ...routes_config.users,
    component: RouteTrackerPage
  },
  [routes_config.user_details.id]: {
    ...routes_config.user_details,
    component: RouteGuideListPage
  },
  [routes_config.private_route_example.id]: {
    ...routes_config.private_route_example,
    component: RouteGuideDetailsPage
  },
  [routes_config.static_page_route_example.id]: {
    ...routes_config.static_page_route_example,
    component: RouteGuideDetailsPage
  }
};
