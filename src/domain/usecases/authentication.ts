import { AccountModel } from '../models';

export interface Authentication {
  auth(): AccountModel;
}
