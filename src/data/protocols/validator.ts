export interface Validator {
  emailIsValid(email: string): boolean;
  passwordIsValid(password: string): boolean;
}
