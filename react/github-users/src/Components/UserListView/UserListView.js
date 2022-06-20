import "./UserListView.css";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import UserCard from "../UserCard/UserCard";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Assets/Loader/Loader";

export const FETCH_USERS = "FETCH_USERS";
let initial = true;

const UserListView = () => {
  const [isLoading, setLoading] = useState(false);
  const perPage = 10;

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const setUrl = (perPage, since) => {
    return `https://api.github.com/users?per_page=${perPage}&since=${since}`;
  };

  let tokenStr = "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";
  const getAllUsers = async (since = 0) => {
    setLoading(true);
    try {
      const response = await axios.get(setUrl(perPage, since), {
        headers: { Authorization: `Bearer ${tokenStr}` },
      });
      const allUsers = response.data;
      dispatch({
        type: FETCH_USERS,
        payload: allUsers,
      });
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initial) {
      getAllUsers();
      initial = false;
    }
  }, []);

  const loadMoreHandler = () => {
    const lastId = users[users.length - 1].id;
    getAllUsers(lastId);
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div>
        <UserCard users={users} />
        <Button className="load-more-button" onClick={loadMoreHandler}>
          Load 10 More
        </Button>
      </div>
    </>
  );
};

export default UserListView;
