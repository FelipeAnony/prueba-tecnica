import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import Button from '../Button';

import Styles from './styles.scss';
import { useHeader } from './useHeader';

const Header = () => {
  const { user, handleLogout } = useHeader();

  return (
    <header className={Styles.header}>
      <section className={Styles.innerContainer}>
        <span className={Styles.logo}>SocialCards</span>
      </section>

      <div className={Styles.downLine}>
        <div className={Styles.innerContainer}>
          <div className={Styles.userInfo}>
            <AiOutlineUser className={Styles.userIcon} />
            <span className={Styles.userName}>{user?.user}</span>
            <div className={Styles.loginButtonContainer}>
              <Button onClick={handleLogout} style="clear">
                <span>
                  <FiLogOut />
                  Logout
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
