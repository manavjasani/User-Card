import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import CardComponent from "../../component/Card";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, []);

  const deleteUserHandler = (id) => {
    const data = users.filter((item, index) => item.id !== id);
    setUsers(data);
    console.log("data", data);
  };

  return (
    <Row>
      {users.map((comp, index) => {
        return (
          <CardComponent comp={comp} deleteUserHandler={deleteUserHandler} />
        );
      })}
    </Row>
  );
};

export default UserCard;
