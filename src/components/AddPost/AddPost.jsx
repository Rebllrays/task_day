import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { postsContext } from "../../PostsContextProvider";

const AddPost = () => {
  const INIT_STATE = {
    author: "",
    descreption: "",
    image: "",
  };
  
  const [post, setPost] = useState(INIT_STATE);

  const { createPost } = useContext(postsContext);

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(newPost);
  }

  function savePost() {
    createPost(post);
    setPost({
      author: "",
      descreption: "",
      image: "",
    });
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={post.author}
          onChange={handleSubmit}
          name="author"
          type="text"
          placeholder="Enter author"
        />
        <Form.Label>Descreption</Form.Label>
        <Form.Control
          value={post.descreption}
          onChange={handleSubmit}
          name="descreption"
          type="text"
          placeholder="Enter descreption"
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          value={post.image}
          onChange={handleSubmit}
          name="image"
          type="text"
          placeholder="Enter image"
        />
      </Form.Group>

      <Button onClick={savePost} variant="primary">
        Add
      </Button>
    </>
  );
};

export default AddPost;
