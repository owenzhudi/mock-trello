import React from 'react';
import { connect } from 'react-redux';
import { updateName, updatePhone, updateEmail, updateComment, handleSubmitCandidate } from '../../actions/newCandidate';
import './NewCandidateForm.css';

const NewCandidateForm = props => {
  const { candidate, updateName, updatePhone, updateEmail, updateComment, handleSubmitCandidate } = props;

  const handleName = event => {
    updateName(event.target.value);
  };

  const handlePhone = event => {
    updatePhone(event.target.value);
  };

  const handleEmail = event => {
    updateEmail(event.target.value);
  };

  const handleComment = event => {
    updateComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSubmitCandidate();
  };

  return (
    <form onSubmit={handleSubmit} className="new-candidate-form">
      <div>
        <label htmlFor="name">Name: (required)</label>
        <input
          id="name"
          type="text"
          value={candidate.name}
          onChange={handleName}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          type="text"
          value={candidate.phone}
          onChange={handlePhone}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          value={candidate.email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment: </label>
        <textarea
          id="comment"
          value={candidate.comment}
          onChange={handleComment}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = state => ({
  candidate: state.newCandidate.candidate
});

const mapDispatchToProps = {
  updateName,
  updatePhone,
  updateEmail,
  updateComment,
  handleSubmitCandidate
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCandidateForm);
