import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { rootContext } from 'stores';
import { useMount } from 'react-use';
import { RouteCardSkeleton } from 'components/RouteCardSkeleton';
import { RouteCard } from 'components/RouteCard';
import { NoRouteFound } from 'components/NoRouteFound';
import { StyledRoutesListContainer } from 'styled/RoutesListContainer';

export const UserListContainer: React.FC = observer(() => {
  const {
    RouteStore: { state, onGetRoutesList, onRouteSelect }
  } = useContext(rootContext);
  const {
    ui: { isRoutesListLoading },
    data: { routesList }
  } = state;

  useMount(() => {
    onGetRoutesList();
  });

  const onRouteTrack = (route_id: number) => {
    onRouteSelect({ route_id });
  };

  return (
    <StyledRoutesListContainer
      isLoading={isRoutesListLoading}
      isNoRoutes={routesList?.length ? false : true}
    >
      <div className="RoutesListContainer__Main">
        <div className="RoutesListContainer__container">
          <div className="overflow__hidden">
            <div className="RoutesListContainer__block">
              {isRoutesListLoading ? (
                <RouteCardSkeleton count={5} />
              ) : routesList?.length ? (
                routesList.map(route => {
                  return (
                    <RouteCard
                      key={route.route_id}
                      cardDetails={route}
                      onRouteTrack={onRouteTrack}
                      isRoutesList={true}
                    />
                  );
                })
              ) : (
                <NoRouteFound isRoutesList={true} message="No routes found" />
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledRoutesListContainer>
  );
});
