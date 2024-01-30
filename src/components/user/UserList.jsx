import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((res) => setUser(res.data.data));
  }, []);
  return <User user={user} />;
};

export default UserList;
