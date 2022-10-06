import { faker } from '@faker-js/faker';

import { AccountModel } from '@/domain/models';
import { Authentication, AuthParams } from '@/domain/usecases';
import { Validator } from '@/data/protocols';

const makeValidatorStub = (): Validator => {
  class ValidatorStub implements Validator {
    emailIsValid(email: string): boolean {
      return true;
    }
    passwordIsValid(password: string): boolean {
      return true;
    }
  }

  return new ValidatorStub();
};

const makeSut = () => {
  class LocalAuthentication implements Authentication {
    constructor(private readonly validator: Validator) {}

    auth(params: AuthParams): Promise<AccountModel> {
      const emailIsValid = this.validator.emailIsValid(params.email);
      const passwordIsValid = this.validator.passwordIsValid(params.password);

      if (!emailIsValid) {
        return Promise.reject(new InvalidEmailError());
      }

      if (!passwordIsValid) {
        return Promise.reject(new InvalidPasswordError());
      }

      return Promise.resolve({ user: params.email });
    }
  }

  const validatorStub = makeValidatorStub();
  const sut = new LocalAuthentication(validatorStub);

  return { sut, validatorStub };
};

class InvalidEmailError extends Error {
  constructor() {
    super('Invalid Email');
    this.name = 'InvalidEmailError';
  }
}

class InvalidPasswordError extends Error {
  constructor() {
    super('Invalid Password');
    this.name = 'InvalidPasswordError';
  }
}

const email = faker.internet.email();
const password = faker.internet.password();

describe('LocalAuthentication', () => {
  it('Should calls ValidatorStub with correct params', async () => {
    const { sut, validatorStub } = makeSut();
    const emailIsvalidSpy = jest.spyOn(validatorStub, 'emailIsValid');
    const passwordIsValidSpy = jest.spyOn(validatorStub, 'passwordIsValid');

    await sut.auth({ email, password });

    expect(emailIsvalidSpy).toBeCalledWith(email);
    expect(passwordIsValidSpy).toBeCalledWith(password);
  });

  it('Should throws InvalidEmailError if email is invalid', () => {
    const { sut, validatorStub } = makeSut();
    jest.spyOn(validatorStub, 'emailIsValid').mockReturnValueOnce(false);

    expect(sut.auth({ email, password })).rejects.toThrow(
      new InvalidEmailError()
    );
  });

  it('Should throws InvalidPasswordError if password is invalid', () => {
    const { sut, validatorStub } = makeSut();
    jest.spyOn(validatorStub, 'passwordIsValid').mockReturnValueOnce(false);

    expect(sut.auth({ email, password })).rejects.toThrow(
      new InvalidPasswordError()
    );
  });

  it('Should return an AccountModel in success case', async () => {
    const { sut } = makeSut();
    expect(await sut.auth({ email, password })).toEqual({ user: email });
  });
});
