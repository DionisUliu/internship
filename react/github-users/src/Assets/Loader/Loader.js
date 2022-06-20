import "./Loader.css";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <div className="overlay">
      <Spinner className="spinner-style" animation="border" />
    </div>
  );
};
export default Loader;
