import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const UserDetails = () => {
  const { id } = useParams();
  const [getIndividualData, setGetIndividualData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((res) => {
        setIsLoading(false);
        setGetIndividualData(res.data);
      });
  }, []);
  console.log("getIndividualData", getIndividualData);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Card sx={{ maxWidth: 345, marginX: "auto", marginTop: "100px" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getIndividualData.picture}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {getIndividualData.firstName + "" + getIndividualData.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>Gender:{getIndividualData.gender}</div>
              <div>Email:{getIndividualData.email}</div>
              <div>Phone:{getIndividualData.phone}</div>
              <div>Country:{getIndividualData.location?.country}</div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default UserDetails;
