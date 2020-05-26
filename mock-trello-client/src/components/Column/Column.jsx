import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Card from '../Card';
import { updateCandidateStatus } from '../../actions/candidates';
import { APPLIED } from '../../constants/status';
import './Column.css';

const Column = props => {
  const { status, candidates, updateCandidateStatus, onDrag, draggingId } = props;

  const onDrop = event => {
    event.preventDefault();
    updateCandidateStatus(draggingId, status);
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  return (
    <div
      className="column"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="column-status">{status}</div>
      <div>
        {candidates.map(candidate => {
          return (
            <Card
              {...candidate}
              key={candidate._id}
              onDrag={() => onDrag(candidate._id)}
            />
          );
        })}
      </div>
      {status === APPLIED && (
        <Link to="/new-candidate">
          Add candidate
        </Link>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  updateCandidateStatus
};

export default connect(undefined, mapDispatchToProps)(Column);
