import React, { Component } from 'React';
import Colomn from '../Column';
import {
  APPLIED,
  PHONE_SCREEN,
  ON_SITE,
  OFFERED,
  ACCEPTED,
  REJECTED
} from '../../constants/status';

const STATUS = [APPLIED, PHONE_SCREEN, ON_SITE, OFFERED, ACCEPTED, REJECTED];

class Board extends Component {
  render() {
    const { candidates } = this.props;
    return (
      <div>
        <div>Mock trello</div>
        <div>
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

export default Board;
