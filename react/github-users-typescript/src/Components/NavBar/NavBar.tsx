import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="./github-logo-whiter.png"
            width="60"
            height="60"
            className="d-inline-block align-center"
          />
          <img
            alt=""
            src="./github-logo-name.png"
            width="100"
            height="40"
            className="d-inline-block align-center"
          />
          <h6
            className="d-inline-block align-top"
            style={{ marginTop: "15px", fontSize: "12px" }}
          >
            USERS
          </h6>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
