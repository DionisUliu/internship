import "./NotFound.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate("/");
  };
  return (
    <>
      <img src="./Octocat.png" className="octo-cat"></img>
      <div className="not-found-oops">Oops!</div>
      <div className="not-found-404">404 Page Not Found</div>
      <Button
        variant="outline-danger"
        onClick={navigateToMainPage}
        className="go-home-button"
      >
        Go back to users
      </Button>
    </>
  );
};
export default NotFound;
