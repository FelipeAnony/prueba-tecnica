import { useRoutes } from 'react-router-dom';
import { LoginPage } from '@/presentation/pages';

const Routes: React.FC = () =>
  useRoutes([
    { path: '/', element: <>Home</> },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <>Not found</> },
  ]);

export default Routes;
