import { observable, action } from 'mobx';
import { getUsersApi } from 'services/users';
import { RootStore } from 'stores';
import { history } from 'config/routes';
import { IUser } from 'types/index';
import { routes as routes_config } from 'config/routes_config';

export type IInitialState = {
  data: {
    users: IUser[] | null;
    total: number | null;
  };
  ui: {
    isUsersLoading: boolean;
  };
};

export const initialState: IInitialState = {
  data: {
    users: null,
    total: null
  },
  ui: {
    isUsersLoading: false
  }
};

export class UsersStore {
  @observable state: IInitialState = initialState;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    /* use this space to hydrate state from localStorage */
  }

  onGetUsers = async () => {
    this.setState({
      ui: { isUsersLoading: true }
    });
    try {
      const response = await getUsersApi();
      this.setState({
        data: {
          users: response?.data?.users,
          total: response?.data?.total
        },
        ui: {
          isUsersLoading: false
        }
      });
    } catch (error) {
      this.setState({
        ui: {
          isUsersLoading: false
        }
      });
    }
  };

  onUserSelect = (params: { user_id: number }) => {
    const { user_id } = params;
    history.push(routes_config.user_details.path_string({ user_id }));
  };

  @action
  setState = (params: Partial<IInitialState>) => {
    const { state } = this;
    this.state = {
      ...state,
      ...params
    };
    /* use this space to save/sync state with localStorage */
  };

  @action
  reset = () => {
    this.state = initialState;
    /* use this space to reset localStorage in case if you're persisting this state */
  };
}
