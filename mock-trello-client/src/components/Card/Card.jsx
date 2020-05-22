import React from 'react';

const Card = props => {
  const { candidate } = props;

  return (
    <div>
      <div>Name: {candidate.name}</div>
      <div>Phone: {candidate.phone}</div>
      <div>Email: {candidate.email}</div>
    </div>
  );
};

export default Card;
