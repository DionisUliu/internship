import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
type ProtectedRouteProps = {
  children: ReactElement;
};
const ProtectedRoute = (props: ProtectedRouteProps): ReactElement => {
  const user = null;
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
