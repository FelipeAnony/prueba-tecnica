import { useRoutes } from 'react-router-dom';

import { HomePage, LoginPage } from '@/presentation/pages';

const Routes: React.FC = () =>
  useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <>Not found</> },
  ]);

export default Routes;
