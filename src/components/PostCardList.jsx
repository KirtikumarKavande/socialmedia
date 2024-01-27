import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = () => {
  const [post, setPost] = useState();
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((res) => setPost(res.data.data));
  }, []);
  console.log(post);
  return (
    <div>
      {post &&
        post.map((item) => (
          <PostCard
            key={item.id}
            image={item.image}
            description={item.description}
            firstName={item.owner.firstName}
          />
        ))}
    </div>
  );
};

export default PostCardList;
