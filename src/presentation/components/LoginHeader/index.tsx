import Styles from './styles.scss';

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.loginHeader}>
      <section className={Styles.innerContainer}>
        <span className={Styles.logo}>SocialCards</span>
      </section>
      <div className={Styles.downLine}></div>
    </header>
  );
};

export default LoginHeader;
