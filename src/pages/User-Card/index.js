import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return <div>UserCard</div>;
};

export default UserCard;
