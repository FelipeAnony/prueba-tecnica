import { Input, ErrorMessage, Button } from '../';

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
          helpMessage="Tu contraseña debe tener entre 6 - 12 caracteres, con al menos una letra mayuscula, una minuscula y un numero."
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
