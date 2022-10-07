import { LocalAuthentication } from '@/data/usecases';
import { Authentication } from '@/domain/usecases';
import { makeValidator } from './makeValidator';

export const makeLocalAuthentication = (): Authentication => {
  return new LocalAuthentication(makeValidator());
};
