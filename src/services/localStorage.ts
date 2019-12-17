/**
 * @description wrapper/helper over localStorage
 * - keeping the state in a single object allows
 * us to easily hydrate the localStorage state.
 * - You can also keep your store( mobx or any)
 *  in sync with localStorage with the help of this
 *  architecture
 */
import { IUser } from 'types';

const key = 'cra-boilerplate';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/**
 * @todo import types of from types/ and assign here
 */
type IState = {
  auth: object;
  user: IUser;
};

export const lcStateDef = {
  auth: 'auth',
  user: 'user'
};

export const saveState = (state: IState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch {
    // ignore write errors
  }
};

export const get = ({ key }: { key: string }) => {
  const state = loadState();
  return state?.[key];
};

export const set = ({ key, value }: { key: string; value: object }) => {
  const state = loadState() || {};
  const updatedState = {
    ...state,
    [key]: value
  };
  saveState(updatedState);
  return updatedState[key];
};

export const getUser = (): IUser => {
  return get({ key: lcStateDef.user });
};

export const setUser = ({ value }: { value: IUser }): IUser => {
  return set({ key: lcStateDef.user, value });
};
