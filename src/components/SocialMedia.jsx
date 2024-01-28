import React from "react";
import Navbar from "./Navbar/Navbar"
import MainContainer from "./MainContainer/MainContainer";
import { Box } from "@mui/material";

const SocialMedia = () => {
  return (
    <div>
      
      <Navbar/>
      <Box sx={{pt:2}}>
      <MainContainer/>

      </Box>
    </div>
  );
};

export default SocialMedia;
