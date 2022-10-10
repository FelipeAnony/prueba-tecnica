import Styles from './styles.scss';

const LogoSpinner: React.FC = () => {
  return (
    <section className={Styles.logoSpinner}>
      <div className={Styles.logoLetters}>SocialCards</div>
      <div className={Styles.spinner}></div>
      <span className={Styles.loading}>Loading...</span>
    </section>
  );
};

export default LogoSpinner;
