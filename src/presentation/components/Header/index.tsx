import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { Button, ChangeLanguageBtn, Logo } from '../';
import { useHeader } from '@/presentation/hooks';

import './styles.scss';

const Header: React.FC = () => {
  const { user, handleLogout } = useHeader();
  const { t } = useTranslation();

  return (
    <header className={'header'}>
      <Logo />
      <div className={'header__downLine'}>
        <nav className={'header__nav'}>
          {user?.user && (
            <>
              <AiOutlineUser className={'header__userIcon'} />
              <span className={'header__userName'}>{user?.user}</span>
            </>
          )}

          <ChangeLanguageBtn />

          {user?.user && (
            <div className={'header__logoutButtonContainer'}>
              <Button onClick={handleLogout} style="clear">
                <span>
                  <FiLogOut />
                  {t('logout')}
                </span>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
