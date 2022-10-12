import Styles from './styles.scss';

const Logo: React.FC = () => {
  return (
    <div className={Styles.innerContainer}>
      <span className={Styles.logo}>SocialCards</span>
    </div>
  );
};

export default Logo;
