import { Footer, Header, LoginForm } from '@/presentation/components';
import './styles.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={'login'}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
