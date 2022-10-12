import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import { useHeader } from './useHeader';

import Styles from './styles.scss';
import ChangeLanguageBtn from '../ChangeLanguageBtn';

const Header: React.FC = () => {
  const { user, handleLogout } = useHeader();
  const { t } = useTranslation();

  return (
    <header className={Styles.header}>
      <div className={Styles.innerContainer}>
        <span className={Styles.logo}>SocialCards</span>
      </div>

      <div className={Styles.downLine}>
        <div className={Styles.innerContainer}>
          <div className={Styles.userInfo}>
            <AiOutlineUser className={Styles.userIcon} />

            <span className={Styles.userName}>{user?.user}</span>

            <ChangeLanguageBtn />

            <div className={Styles.logoutButtonContainer}>
              <Button onClick={handleLogout} style="clear">
                <span>
                  <FiLogOut />
                  {t('logout')}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
