import { useTranslation } from 'react-i18next';

import Button from '../Button';

import Styles from './styles.scss';

const ChangeLanguageBtn: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className={Styles.languageButtons}>
      <Button onClick={() => i18n.changeLanguage('en')} style="clear">
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/320px-Flag_of_the_United_Kingdom.png"
            alt="spain"
          />
          EN
        </>
      </Button>
      |
      <Button onClick={() => i18n.changeLanguage('es')} style="clear">
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"
            alt="spain"
          />
          ES
        </>
      </Button>
    </div>
  );
};

export default ChangeLanguageBtn;
