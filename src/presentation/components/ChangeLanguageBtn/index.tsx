import { useTranslation } from 'react-i18next';

import Button from '../Button';

import Styles from './styles.scss';

const ChangeLanguageBtn: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className={Styles.languageButtons}>
      <Button onClick={() => i18n.changeLanguage('en')} style="clear">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/socialcards-5d7fb.appspot.com/o/320px-Flag_of_the_United_Kingdom.png?alt=media&token=84de0866-ac9b-468e-ba89-afea3850b8e1"
            alt="england flag"
          />
          EN
        </div>
      </Button>
      <span>|</span>
      <Button onClick={() => i18n.changeLanguage('es')} style="clear">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/socialcards-5d7fb.appspot.com/o/spain.png?alt=media&token=2e4ba478-1a70-4109-8920-95285d10fd9b"
            alt="spain flag"
          />
          ES
        </div>
      </Button>
    </div>
  );
};

export default ChangeLanguageBtn;
