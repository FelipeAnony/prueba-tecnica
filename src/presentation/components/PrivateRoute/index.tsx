import { Navigate } from 'react-router-dom';

type Props = {
  auth: any;
  children: JSX.Element;
  redirectOnFailTo: string;
};

export const PrivateRoute: React.FC<Props> = ({
  auth,
  redirectOnFailTo,
  children,
}) => {
  if (!auth) {
    return <Navigate to={redirectOnFailTo} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
