import "./UserDetailsCard.css";
import Loader from "../../Assets/Loader/Loader";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { HiUsers, HiUser } from "react-icons/hi";
import { BiGitRepoForked } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IUser } from "../../Interfaces/IUsers";

const UserDetailsCard = () => {
  const navigate = useNavigate();
  const navigateToMainPage = () => {
    navigate(`/`);
  };
  const [user, setUser] = useState<IUser>();
  const [isLoading, setLoading] = useState(false);

  let tokenStr = "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";

  const setUrl = (userId: string) => {
    return `https://api.github.com/users/${userId}`;
  };

  const getUser = async (userId: string): Promise<IUser> => {
    setLoading(true);
    try {
      const response: AxiosResponse<IUser> = await axios.get(setUrl(userId), {
        headers: { Authorization: `Bearer ${tokenStr}` },
      });
      return response.data;
    } catch (e) {
      const errorResponse = e as AxiosError<string, string>;
      throw new Error(errorResponse.config.data);
    } finally {
      setLoading(false);
    }
  };

  const { id } = useParams();
  const getUserDetails = useCallback(async () => {
    try {
      if (id !== undefined) {
        const currentUser = await getUser(id);
        setUser(currentUser);
      }
    } catch (e: any) {
      const errorResponse = e as AxiosError<string, string>;
      console.log(errorResponse.config.data);
    }
  }, [id]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  if (!user) {
    return <>{`No user found with id ${id}`}</>;
  }

  return (
    <>
      {isLoading ? <Loader /> : null}
      <Card className="text-center details-card-style">
        <Card.Header>
          User Details<Card.Text>Created: {user.created_at}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Card.Img src={user.avatar_url} className="details-image-avatar" />
          </Card.Title>
          <Card.Text>
            <Row xs={2} md={2} lg={2}>
              <Col className="username-style">
                <h6>Username</h6>
                <Card.Text>@{user.login}</Card.Text>
              </Col>
              <Col className="name-style">
                <h6>Name</h6>
                <Card.Text>{user.name}</Card.Text>
              </Col>
            </Row>
          </Card.Text>
          <hr className="devider-1"></hr>
          <Card.Text>
            <Row xs={2} md={2} lg={2}>
              <a href={user.html_url} rel="noreferrer" target="_blank">
                <Col className="username-style">
                  <FaGithubSquare className="user-details-icon-style" />
                </Col>
              </a>
              <a href={user.blog} rel="noreferrer" target="_blank">
                <Col className="name-style">
                  <AiFillGoogleCircle className="user-details-icon-style" />
                </Col>
              </a>
            </Row>
          </Card.Text>
          <hr className="devider-2"></hr>
          <Row className="text-center">
            <Col>
              <HiUsers /> <h6>Followers</h6>
              <Card.Text>{user.followers}</Card.Text>
            </Col>

            <Col>
              <HiUser /> <h6>Following</h6>
              <Card.Text>{user.following}</Card.Text>
            </Col>
            <Col>
              <BiGitRepoForked /> <h6>Public Repos</h6>
              <Card.Text>{user.public_repos}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button
            className="go-back-home-button"
            onClick={navigateToMainPage}
            variant="outline-danger"
          >
            Go back to users
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default UserDetailsCard;
