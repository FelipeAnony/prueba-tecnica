import { Footer, LoginForm, LoginHeader } from '@/presentation/components';
import Styles from './styles.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={Styles.loginContainer}>
      <LoginHeader />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
