import React from 'react';
import { Link } from 'react-router-dom';
import NewCandidateForm from '../NewCandidateForm';

const NewCandidate = props => {
  return (
    <div>
      <Link to="/board">Back</Link>
      <h2>New Candidate</h2>
      <NewCandidateForm />
    </div>
  );
};

export default NewCandidate;
