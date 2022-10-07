import Footer from '@/presentation/components/Footer';
import LoginForm from '@/presentation/components/LoginForm';
import LoginHeader from '@/presentation/components/LoginHeader';

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
