import { useRoutes } from 'react-router-dom';
import LoginPage from '../pages/Login';

const Routes: React.FC = () =>
  useRoutes([
    { path: '/', element: <>Home</> },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <>Not found</> },
  ]);

export default Routes;
