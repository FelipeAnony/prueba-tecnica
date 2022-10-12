import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { Button, ChangeLanguageBtn, Logo } from '../';
import { useHeader } from '@/presentation/hooks';

import Styles from './styles.scss';

const Header: React.FC = () => {
  const { user, handleLogout } = useHeader();
  const { t } = useTranslation();

  return (
    <header className={Styles.header}>
      <Logo />
      <div className={Styles.downLine}>
        <div className={Styles.innerContainer}>
          <div className={Styles.userInfo}>
            {user?.user && (
              <>
                <AiOutlineUser className={Styles.userIcon} />
                <span className={Styles.userName}>{user?.user}</span>
              </>
            )}

            <ChangeLanguageBtn />

            {user?.user && (
              <div className={Styles.logoutButtonContainer}>
                <Button onClick={handleLogout} style="clear">
                  <span>
                    <FiLogOut />
                    {t('logout')}
                  </span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
