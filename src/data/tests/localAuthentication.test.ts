import { faker } from '@faker-js/faker';

import { LocalAuthentication } from '@/data/usecases';
import { ValidatorStub } from '@/data/mocks';
import { InvalidEmailError, InvalidPasswordError } from '@/data/errors';

const makeSut = () => {
  const validatorStub = new ValidatorStub();
  const sut = new LocalAuthentication(validatorStub);

  return { sut, validatorStub };
};

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
