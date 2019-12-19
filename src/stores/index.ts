import { createContext } from 'react';
import { observable } from 'mobx';
import remotedev from 'mobx-remotedev';
import { AppStore } from './app';
import { UsersStore } from './users';
import { AuthStore } from './auth';

export class RootStore {
  AppStore: AppStore;
  UsersStore: UsersStore;
  AuthStore: AuthStore;

  @observable version = 1;

  constructor() {
    this.AppStore = new AppStore(this);
    this.UsersStore = new UsersStore(this);
    this.AuthStore = new AuthStore(this);
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
