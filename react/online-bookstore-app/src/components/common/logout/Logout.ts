import { useEffect } from "react";
import { logout } from "../../../services/userService/userService";

const Logout = () => {
  useEffect(() => {
    logout();
    window.location.href = "/auth/login";
  });
  return null;
};

export default Logout;
