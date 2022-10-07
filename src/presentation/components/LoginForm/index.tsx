import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import Styles from './styles.scss';

import { useLoginForm } from './useLoginForm';

const LoginForm: React.FC = () => {
  const { loginData, error, buttonIsDisabled, handleChange, handleSubmit } =
    useLoginForm();

  return (
    <section className={Styles.loginFormContainer}>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()} className={Styles.loginForm}>
        <Input
          label="Email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder={'example@mail.com'}
          value={loginData.email}
          type="email"
          required
          autoFocus
        />

        <Input
          label="Password"
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          value={loginData.password}
          placeholder="Your password"
          required
        />

        {error && <ErrorMessage error={error.message} />}

        <div className={Styles.buttonContainer}>
          <Button
            style={buttonIsDisabled ? 'disabled' : undefined}
            disabled={buttonIsDisabled}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
