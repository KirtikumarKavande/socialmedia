import axios from "axios";
import React from "react";

const fetchData = async (props) => {
  const { queryKey } = props;
  console.log("idGetting", queryKey[1]);
  const userInfo = await axios
    .get(`https://dummyapi.io/data/v1/user/${queryKey[1]}`, {
      headers: { "app-id": import.meta.env.VITE_APP_ID },
    })
    .then((res) => {
      return res.data;
    });
  return userInfo;
};

export default fetchData;
