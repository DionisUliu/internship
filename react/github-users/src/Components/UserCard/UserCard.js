import "./UserCard.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const UserCard = ({ users }) => {
  const navigate = useNavigate();

  const navigateToUserDetails = (id) => {
    navigate(`/user-details/${id}`);
  };

  return (
    <Container className=" text-center card-wreapper">
      <Row className="card-row">
        {users.map((user) => (
          <Card className="card-style" key={user.id}>
            <Card.Img
              className="image-avatar"
              variant="top"
              src={user.avatar_url}
            />
            <Card.Body>
              <Card.Title className="title-style">
                <h5>@{user.login}</h5>
              </Card.Title>
              <br />
              <Button
                variant="outline-danger"
                onClick={() => navigateToUserDetails(user.login)}
                className="show-details-button"
              >
                Show Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default UserCard;
