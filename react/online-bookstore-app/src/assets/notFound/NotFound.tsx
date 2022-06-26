import "./NotFound.scss";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate(`/app/books`);
  };
  return (
    <div className="not-found-container">
      <img className="not-found-image" src="../../not-found.png"></img>
      <p className="not-found-code">404</p>
      <span style={{ color: "gray" }}>
        Sorry, the page you visited does not exist.
      </span>
      <Button
        onClick={navigateToDashboard}
        style={{ marginTop: 20 }}
        type="primary"
      >
        Back Home
      </Button>
    </div>
  );
};
export default NotFound;
