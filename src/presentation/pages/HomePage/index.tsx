import { PrivateRoute, Header, Footer } from '@/presentation/components';

import { useGlobalDataContext } from '@/store/hooks';

const HomePage: React.FC = () => {
  const { user } = useGlobalDataContext();

  return (
    <PrivateRoute auth={true} redirectOnFailTo="/login">
      <>
        <Header />
        <Footer />
      </>
    </PrivateRoute>
  );
};

export default HomePage;
