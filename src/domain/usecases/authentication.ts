import { AccountModel } from '../models';

export type AuthParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthParams): Promise<AccountModel>;
}
