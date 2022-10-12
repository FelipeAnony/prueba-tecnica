import { useTranslation } from 'react-i18next';

import { Input, ErrorMessage, Button } from '../';

import Styles from './styles.scss';

import { useLoginForm } from './useLoginForm';

const LoginForm: React.FC = () => {
  const { loginData, error, buttonIsDisabled, handleChange, handleSubmit } =
    useLoginForm();

  const { t } = useTranslation();

  return (
    <section className={Styles.loginFormContainer}>
      <h1>{t('login')}</h1>
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
          label={t('password')}
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          value={loginData.password}
          placeholder="Your password"
          helpMessage={t('helpPasswordmessage')}
          required
        />

        {error && <ErrorMessage error={error.message} />}

        <div className={Styles.buttonContainer}>
          <Button
            style={buttonIsDisabled ? 'disabled' : undefined}
            disabled={buttonIsDisabled}
            onClick={handleSubmit}
          >
            {t('login')}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
