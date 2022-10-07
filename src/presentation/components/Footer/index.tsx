import Styles from './styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.innerContainer}>
        <span className={Styles.logo}>SocialCards</span>
      </section>
    </footer>
  );
};

export default Footer;
