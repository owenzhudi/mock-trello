import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Colomn from '../Column';
import { getAllCandidates } from '../../actions/candidates';
import {
  APPLIED,
  PHONE_SCREEN,
  ON_SITE,
  OFFERED,
  ACCEPTED,
  REJECTED
} from '../../constants/status';
import './Board.css';

const STATUS = [APPLIED, PHONE_SCREEN, ON_SITE, OFFERED, ACCEPTED, REJECTED];

class Board extends Component {
  componentDidMount() {
    this.props.getAllCandidates();
  }

  render() {
    const { candidates } = this.props;
    return (
      <div className="board">
        <div>Mock trello</div>
        <div className="status-container">
          {STATUS.map((status, index) => {
            const filteredCandidates = candidates.filter(candidate => candidate.status === status);
            return (
              <Colomn
                key={status}
                status={status}
                candidates={filteredCandidates}
              />
            );
          })}
       </div>
      </div>   
    );
  }
}

const mapStateToProps = state => ({
  candidates: state.candidates.candidates
});

const mapDispatchToProps = {
  getAllCandidates
};

Board.propTypes = {
  candidates: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
