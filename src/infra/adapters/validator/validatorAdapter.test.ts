import { Validator } from '@/data/protocols';
import { faker } from '@faker-js/faker';

const makeSut = (): Validator => {
  class LocalValidator implements Validator {
    emailIsValid(email: string): boolean {
      const emailRegexp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      return emailRegexp.test(email);
    }

    passwordIsValid(password: string): boolean {
      const passwordRegexp =
        /^(?=.*\d)(?=.*[a-zA-Z])(?!.*[\W_\x7B-\xFF]).{4,16}$/;
      return passwordRegexp.test(password);
    }
  }

  return new LocalValidator();
};

describe('Validator adapter', () => {
  it('Should return false if an invalid email is provided', () => {
    const sut = makeSut();
    expect(sut.emailIsValid('invalid-email')).toBe(false);
  });

  it('Should return true if a valid email is provided', () => {
    const sut = makeSut();
    expect(sut.emailIsValid(faker.internet.email())).toBe(true);
  });
});
