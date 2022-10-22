import { Validator } from '@/data/protocols';

export class LocalValidator implements Validator {
  emailIsValid(email: string): boolean {
    const emailRegexp = /^(\w+[/./-]?)+@[a-z]+[/.]\w{2,}$/;
    return emailRegexp.test(email);
  }

  passwordIsValid(password: string): boolean {
    const passwordRegexp = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{6,12}$/;
    return passwordRegexp.test(password);
  }
}
