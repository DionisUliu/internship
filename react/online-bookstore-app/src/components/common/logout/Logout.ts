import { useEffect } from "react";
import { removeJwtFromStorage } from "../../../services/authService/authService";

const Logout = () => {
  useEffect(() => {
    removeJwtFromStorage();
    window.location.href = "/auth/login";
  });
  return null;
};

export default Logout;
