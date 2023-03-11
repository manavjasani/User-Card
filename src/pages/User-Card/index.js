import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import CardComponent from "../../component/Card";
import Loader from "../../component/Loader";

const UserCard = () => {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);

  console.log("loader", loader);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
      setLoader(false);
    });
  }, []);

  const deleteUserHandler = (id) => {
    const data = users.filter((item, index) => item.id !== id);
    setUsers(data);
    console.log("data", data);
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <Row>
      {users.map((comp, index) => {
        return (
          <CardComponent
            key={comp.id}
            comp={comp}
            deleteUserHandler={deleteUserHandler}
          />
        );
      })}
    </Row>
  );
};

export default UserCard;
