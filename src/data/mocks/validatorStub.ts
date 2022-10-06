import { Validator } from '../protocols';

export class ValidatorStub implements Validator {
  emailIsValid(email: string): boolean {
    return true;
  }
  passwordIsValid(password: string): boolean {
    return true;
  }
}
