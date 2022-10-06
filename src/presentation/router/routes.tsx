import { useRoutes } from 'react-router-dom';

const Routes: React.FC = () =>
  useRoutes([
    { path: '/', element: <>Home</> },
    { path: '/login', element: <>Login</> },
    { path: '*', element: <>Not found</> },
  ]);

export default Routes;
