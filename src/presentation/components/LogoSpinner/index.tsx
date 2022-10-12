import { useTranslation } from 'react-i18next';

import Styles from './styles.scss';

const LogoSpinner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={Styles.logoSpinner}>
      <div className={Styles.logoLetters}>SocialCards</div>
      <div className={Styles.spinner}></div>
      <span className={Styles.loading}>{t('loading')}...</span>
    </section>
  );
};

export default LogoSpinner;
