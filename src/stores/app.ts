import { observable, action } from 'mobx';
import { RootStore } from 'stores';

export type IInitialState = {
  data: {
    deferredPrompt: any;
  };
  ui: {
    isInternetConnection: boolean;
    isAddToHomeScreen: boolean;
  };
};

export const initialState: IInitialState = {
  data: {
    deferredPrompt: null
  },
  ui: {
    isInternetConnection: navigator.onLine,
    isAddToHomeScreen: false
  }
};

export class AppStore {
  @observable state: IInitialState = initialState;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    /* use this space to hydrate state from localStorage */
  }

  checkInternetConnection = () => {
    const { ui } = this.state;
    this.setState({
      ui: {
        ...ui,
        isInternetConnection: navigator.onLine
      }
    });
  };

  onHandleAddToHomeScreenPopUp = (value: boolean) => {
    const { ui } = this.state;
    this.setState({
      ui: {
        ...ui,
        isAddToHomeScreen: value
      }
    });
  };

  setPWADeferredPrompt = (e: any) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        deferredPrompt: e
      }
    });
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
