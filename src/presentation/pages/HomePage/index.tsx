import {
  PrivateRoute,
  Header,
  Footer,
  CardsContainer,
} from '@/presentation/components';

import { PostsDataContextProvider } from '@/store/contexts';
import { useGlobalDataContext } from '@/store/hooks';

const HomePage: React.FC = () => {
  const { user } = useGlobalDataContext();

  return (
    <PrivateRoute auth={true} redirectOnFailTo="/login">
      <>
        <Header />
        <PostsDataContextProvider>
          <CardsContainer />
        </PostsDataContextProvider>
        <Footer />
      </>
    </PrivateRoute>
  );
};

export default HomePage;
