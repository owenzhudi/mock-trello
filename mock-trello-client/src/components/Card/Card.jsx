import React from 'react';
import './Card.css';

const Card = props => {
  const { name, phone, email, comment, onDrag } = props;

  return (
    <div
      className="card"
      draggable
      onDrag={onDrag}
    >
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Email: {email}</div>
      <div>Comment: {comment}</div>
    </div>
  );
};

export default Card;
