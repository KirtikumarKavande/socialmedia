import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";
import postData from "../Provider/post";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1976D2",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {
  const { post, setPost } = React.useContext(postData);

  const [newPost, setNewPost] = React.useState({ text: "", image: "" });
  console.log(newPost);
  const createAPost = () => {
    let postObj = {
      ...newPost,
      likes: 0,
      owner: "60d0fe4f5311236168a109ca",
      publishDate: new Date(),
    };
    axios
      .post("https://dummyapi.io/data/v1/post/create", postObj, {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((res) => setPost([res.data, ...post]));
    setNewPost("");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD POST
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Description"
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              onChange={(e) => {
                setNewPost({ ...newPost, text: e.target.value });
              }}
              //   value={newPost.text}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="ImageUrl"
              variant="outlined"
              onChange={(e) => {
                setNewPost({ ...newPost, image: e.target.value });
              }}
              //   value={newPost.image}
            />
            <Button
              onClick={createAPost}
              variant="contained"
              size="large"
              sx={{ marginX: "35%", marginTop: "10px" }}
            >
              POST
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
