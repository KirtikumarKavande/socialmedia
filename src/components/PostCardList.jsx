import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import postData from "./Provider/post";

const PostCardList = () => {
  const {post,setPost}= useContext(postData)
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((res) => setPost(res.data.data));
  }, []);
  console.log(post)
  return (
    <div>
      {post &&
        post.map((item) => (
          <PostCard
            key={item.id}
            image={item.image}
            description={item.text}
            firstName={item.owner.firstName}
            likes={item.likes}
          />
        ))}
    </div>
  );
};

export default PostCardList;
