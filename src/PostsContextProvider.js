import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const postsContext = createContext();

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const API = "http://localhost:8000/posts";

  async function createPost(newPost) {
    await axios.post(API, newPost);
    getPost()
  }
  async function getPost(){
    const res = await axios(API)
    setPosts(res.data)
  }

  let values = {
    createPost,
    posts,
    getPost
  };
  return (
    <>
      <postsContext.Provider value={values}>{children} </postsContext.Provider>
    </>
  );
};
export default PostsContextProvider;
