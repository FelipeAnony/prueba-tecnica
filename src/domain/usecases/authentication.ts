import { AccountModel } from '../models';

export type AuthParams = {
  email: string;
  password: string;
};

export interface Authentication {
  // Retorna una promise por que en teoria una autenticacion deveria ser online.
  // De este modo se queda mas parecido a como seria echo en un caso real
  auth(params: AuthParams): Promise<AccountModel>;
}
