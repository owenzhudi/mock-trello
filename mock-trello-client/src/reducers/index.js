import { combineReducers } from 'redux';
import candidates from './candidates';
import newCandidate from './newCandidate';

const reducers = combineReducers({
  candidates,
  newCandidate
});

export default reducers;
