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
  constructor(props) {
    super(props);
    this.state = {
      draggingId: null
    };
  }

  componentDidMount() {
    this.props.getAllCandidates();
  }

  onDrag = (_id) => {
    this.setState({ draggingId: _id });
  };

  render() {
    const { candidates } = this.props;
    return (
      <div className="board">
        <h1 className="header">Mock trello</h1>
        <div className="status-container">
          {STATUS.map((status, index) => {
            const filteredCandidates = candidates.filter(candidate => candidate.status === status);
            return (
              <Colomn
                key={status}
                status={status}
                candidates={filteredCandidates}
                draggingId={this.state.draggingId}
                onDrag={this.onDrag}
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
