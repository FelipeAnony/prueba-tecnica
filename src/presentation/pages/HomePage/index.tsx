import { PrivateRoute } from '@/presentation/components';

import { useGlobalDataContext } from '@/store/hooks';

const HomePage: React.FC = () => {
  const { user } = useGlobalDataContext();

  return (
    <PrivateRoute auth={user?.user} redirectOnFailTo="/login">
      <div>Hello world</div>
    </PrivateRoute>
  );
};

export default HomePage;
