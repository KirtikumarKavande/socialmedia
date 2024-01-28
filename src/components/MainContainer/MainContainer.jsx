import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PostCard from "../PostCard";
import PostCardList from "../PostCardList.jsx";
import User from "../user/User.jsx";
import UserList from "../user/UserList.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  useEffect(() => {
    console.log("useEffect running");
  }, []);
  return (
    <Box sx={{ width: "100%" }} marginX={30}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          {/* <PostCard /> */}
          <Item>
            <UserList />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
