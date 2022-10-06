import { faker } from '@faker-js/faker';

import { AccountModel } from '@/domain/models';
import { Authentication, AuthParams } from '@/domain/usecases';

const makeSut = () => {
  class LocalAuthentication implements Authentication {
    auth(params: AuthParams): Promise<AccountModel> {
      return Promise.resolve({ user: params.email });
    }
  }

  return new LocalAuthentication();
};

describe('LocalAuthentication', () => {
  it('Should return AccountModel in success case', async () => {
    const sut = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();

    expect(await sut.auth({ email, password })).toEqual({ user: email });
  });
});
