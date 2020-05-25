import React from 'react';
import Card from '../Card';
import { APPLIED } from '../../constants/status';
import './Column.css';

const Column = props => {
  const { status, candidates } = props;

  return (
    <div className="column">
      <div>{status}</div>
      <div>
        {candidates.map(candidate => {
          return (
            <Card
              {...candidate}
              key={candidate._id}
            />
          );
        })}
      </div>
      {status === APPLIED && (
        <div>
          Add candidate
        </div>
      )}
    </div>
  );
};

export default Column;
