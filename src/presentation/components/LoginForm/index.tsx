import { useTranslation } from 'react-i18next';

import { Input, ErrorMessage, Button } from '@/presentation/components';
import { useLoginForm } from '@/presentation/hooks';

import './styles.scss';

const LoginForm: React.FC = () => {
  const { loginData, error, buttonIsDisabled, handleChange, handleSubmit } =
    useLoginForm();

  const { t } = useTranslation();

  return (
    <section className={'loginForm'}>
      <h1>{t('login')}</h1>
      <form onSubmit={(e) => e.preventDefault()} className={'loginForm__form'}>
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
          placeholder={t('your password')}
          helpMessage={t('helpPasswordmessage')}
          required
        />

        {error && <ErrorMessage error={t(error.message)} />}

        <div className={'loginForm__buttonContainer'}>
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
