import { observable, action } from 'mobx';
import { RootStore } from 'stores';
import { IAuth } from 'types';
import { getAuth, setAuth } from 'services/localStorage';
import { history } from 'config/routes';
import { routes } from 'config/routes_config';

export type IInitialState = {
  data: IAuth;
};

export const initialState: IInitialState = {
  data: {
    expires: null,
    token: null
  }
};

export class AuthStore {
  @observable state: IInitialState = initialState;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    /* use this space to hydrate state from localStorage */
    const auth_data = getAuth();
    const state_data: IAuth = auth_data?.token ? auth_data : initialState.data;
    const state: IInitialState = {
      ...initialState,
      data: state_data
    };
    this.setState(state);
    setAuth({ value: state_data });
  }

  onLogin = () => {
    // do something here
  };

  onLogOut = () => {
    this.reset();
    this.rootStore.UsersStore.reset();
    history.replace(routes.index.path);
  };

  @action
  setState = (params: Partial<IInitialState>) => {
    const { state } = this;
    this.state = {
      ...state,
      ...params
    };
    /* use this space to save/sync state with localStorage */
    setAuth({ value: this.state.data }); // keeping localStorage in sync with store
  };

  @action
  reset = () => {
    this.state = initialState;
    /* use this space to reset localStorage in case if you're persisting this state */
    setAuth({ value: initialState.data });
  };
}
