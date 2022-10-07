import { Validator } from '@/data/protocols';

const makeSut = (): Validator => {
  class LocalValidation implements Validator {
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

  return new LocalValidation();
};

describe('Validator adapter', () => {
  it('Should return false if an invalid email are provided', () => {
    const sut = makeSut();
    expect(sut.emailIsValid('invalid-email')).toBe(false);
  });
});
