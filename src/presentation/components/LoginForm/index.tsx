import Button from '../Button';
import Input from '../Input';
import Styles from './styles.scss';

const LoginForm: React.FC = () => {
  return (
    <section className={Styles.loginForm}>
      <h1>Login</h1>
      <Input
        label="Email"
        name="email"
        id="email"
        onChange={() => null}
        placeholder={'example@mail.com'}
        type="email"
        required
        autoFocus
      />
      <Input
        label="Password"
        id="password"
        name="password"
        onChange={() => null}
        type="password"
        placeholder="Your password"
        required
      />
      <div className={Styles.buttonContainer}>
        <Button onClick={() => null}>Login</Button>
      </div>
    </section>
  );
};

export default LoginForm;
