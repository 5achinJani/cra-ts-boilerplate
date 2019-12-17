import { createContext } from 'react';
import { observable } from 'mobx';
import remotedev from 'mobx-remotedev';
import { AppStore } from './app';

export class RootStore {
  AppStore: AppStore;

  @observable version = 1;

  constructor() {
    this.AppStore = new AppStore(this);
  }
}

export const rootStore = (() => {
  const store = remotedev(RootStore, {
    global: true,
    onlyActions: true,
    name: 'app-name'
  });
  return new store();
})();

export const rootContext = createContext(rootStore);
