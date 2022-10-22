import { InvalidEmailError, InvalidPasswordError } from '@/data/errors';
import { Validator } from '@/data/protocols';
import { AccountModel } from '@/domain/models';
import { Authentication, AuthParams } from '@/domain/usecases';

export class LocalAuthentication implements Authentication {
  constructor(private readonly validator: Validator) {}

  auth(params: AuthParams): Promise<AccountModel> {
    const emailIsValid = this.validator.emailIsValid(params.email);
    const passwordIsValid = this.validator.passwordIsValid(params.password);

    if (!emailIsValid) return Promise.reject(new InvalidEmailError());
    if (!passwordIsValid) return Promise.reject(new InvalidPasswordError());

    return Promise.resolve({ user: params.email });
  }
}
