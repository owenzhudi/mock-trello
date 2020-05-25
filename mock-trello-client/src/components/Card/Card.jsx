import React, { useState } from 'react';

const Card = props => {
  const { name, phone, email, comment } = props;
  const [dragging, setDragging] = useState(false);

  return (
    <div draggable>
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Email: {email}</div>
      <div>Comment: {comment}</div>
    </div>
  );
};

export default Card;
