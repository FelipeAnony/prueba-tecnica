import { Footer, Header, LoginForm } from '@/presentation/components';
import Styles from './styles.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={Styles.loginContainer}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
