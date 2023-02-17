import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PostCard = ({ item }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.author}</Card.Title>
          <Card.Text>{item.descreption}</Card.Text>
          <Button variant="primary">Dettails</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="success">Edit</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
