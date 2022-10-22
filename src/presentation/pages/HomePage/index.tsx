import {
  PrivateRoute,
  Header,
  Footer,
  CardsContainer,
  AddPostForm,
} from '@/presentation/components';

import { PostsDataContextProvider } from '@/store/contexts';
import { useGlobalDataContext } from '@/store/hooks';

const HomePage: React.FC = () => {
  const { user } = useGlobalDataContext();

  return (
    <PrivateRoute auth={user?.user} redirectOnFailTo="/login">
      <Header />
      <PostsDataContextProvider>
        <AddPostForm />
        <CardsContainer />
      </PostsDataContextProvider>
      <Footer />
    </PrivateRoute>
  );
};

export default HomePage;
