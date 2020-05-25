import {
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_ALL_CANIDDATES_FAILURE,
  MOVE_CANDIDATES
} from '../constants/actionTypes';

const initialState = {
  candidates: [],
  loading: false,
  error: null
};

const candidates = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_CANDIDATES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_CANDIDATES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        candidates: action.payload.candidates
      };
    case GET_ALL_CANIDDATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state;
  }
};

export default candidates;
