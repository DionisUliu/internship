import { ReactElement } from "react";

import { Navigate } from "react-router-dom";

import { getToken } from "../../../services/authService/authService";
type ProtectedRouteProps = {
  children: ReactElement;
};
const ProtectedRoute = (props: ProtectedRouteProps): ReactElement => {
  if (!getToken()) {
    return <Navigate to="/auth/login" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
