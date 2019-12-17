import { get } from 'services';
import { AxiosPromise } from 'axios';
import { IUser } from 'types/index';

/**
 * @description your api helper functions defination goes here
 */

export type IGetRoutesResponse = {
  users: IUser[];
  total: number;
};

export const getUsersApi = (): AxiosPromise<IGetRoutesResponse> => {
  return get({ subUrl: 'users' });
};

export type IGetRouteByIdParams = {
  user_id: number;
};

export type IGetRoutesByIdResponse = {
  user: IUser;
};

export const getUserByIdApi = (
  params: IGetRouteByIdParams
): AxiosPromise<IGetRoutesByIdResponse> => {
  const { user_id } = params;
  return get({ subUrl: 'users', params: { user_id } });
};
