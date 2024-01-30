import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import fetchData from "./helper/fetchData";
const UserDetails = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery(["user", id], fetchData);
  console.log("data", data);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Card sx={{ maxWidth: 345, marginX: "auto", marginTop: "100px" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={data.picture}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.firstName + "" + data.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>Gender:{data.gender}</div>
              <div>Email:{data.email}</div>
              <div>Phone:{data.phone}</div>
              <div>Country:{data.location?.country}</div>
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


