export type IUser = {
  id: number;
  name: string;
  address: string;
  is_active: boolean;
  /**
   * @description add description if something is not explict
   * @todo or add a todo if there's any
   */
  key_that_needs_update: string;
};

export type IAuth = {
  token: string;
  expires: string;
};
