import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postsContext } from "../../PostsContextProvider";
import PostCard from "../PostCard/PostCard";

const PostList = () => {
  const { posts, getPost } = useContext(postsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="mx-auto w-50 d-flex justify-content-around flex-wrap">
      {posts.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostList;
