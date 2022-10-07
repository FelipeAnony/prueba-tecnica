import { Validator } from '@/data/protocols';
import { LocalValidator } from '@/infra/adapters';

export const makeValidator = (): Validator => new LocalValidator();
