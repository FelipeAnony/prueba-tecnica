import { faker } from '@faker-js/faker';

import { LocalValidator } from './localValidator';

const makeSut = () => new LocalValidator();

describe('Validator adapter', () => {
  it('Should return false if an invalid email is provided', () => {
    const sut = makeSut();
    expect(sut.emailIsValid('invalid-email')).toBe(false);
  });

  it('Should return true if a valid email is provided', () => {
    const sut = makeSut();
    expect(sut.emailIsValid(faker.internet.email())).toBe(true);
  });

  it('Should return false if an invalid password is provided', () => {
    const sut = makeSut();
    expect(sut.passwordIsValid('invalid-password')).toBe(false);
  });

  it('Should return true if a valid password is provided', () => {
    const sut = makeSut();
    expect(sut.passwordIsValid('1234aA')).toBe(true);
  });
});
