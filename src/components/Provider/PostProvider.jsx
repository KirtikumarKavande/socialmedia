import React, { useState } from "react";
import Post from "./post";
const PostProvider = (props) => {
  const [post, setPost] = useState([]);
  return (
    <Post.Provider value={{ post, setPost }}>{props.children}</Post.Provider>
  );
};

export default PostProvider;
