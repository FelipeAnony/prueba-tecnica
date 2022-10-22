import { useTranslation } from 'react-i18next';

import './styles.scss';

const LogoSpinner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={'logoSpinner'}>
      <div className={'logoSpinner__title'}>SocialCards</div>
      <div className={'logoSpinner__spinner'}></div>
      <span className={'logoSpinner__loading'}>{t('loading')}...</span>
    </section>
  );
};

export default LogoSpinner;
