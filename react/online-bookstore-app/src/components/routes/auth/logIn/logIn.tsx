import React from "react";
import Translator from "../../../common/translator/Translator";
import LoginForm from "../../../common/loginForm/LoginForm";
import "./LogIn.scss";

const LogIn: React.FC = () => {
  return (
    <div>
      <Translator />
      <LoginForm />
    </div>
  );
};

export default LogIn;
