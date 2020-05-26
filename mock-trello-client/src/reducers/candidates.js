import {
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_ALL_CANIDDATES_FAILURE,
  UPDATE_CANDIDATE_STATUS_REQUEST,
  UPDATE_CANDIDATE_STATUS_SUCCESS,
  UPDATE_CANDIDATE_STATUS_FAILURE
} from '../constants/actionTypes';

const initialState = {
  candidates: [],
  loading: false,
  error: null
};

const updateStatus = (state, action) => {
  const { _id, status } = action.payload;
  const selectedCandidate = state.candidates.find(candidate =>
    candidate._id === _id
  );
  const candidates = state.candidates.filter(candidate =>
    candidate._id !== _id
  );
  if (!selectedCandidate) {
    return state;
  }
  const newCandidate = {
    ...selectedCandidate,
    status
  };
  return {
    ...state,
    loading: false,
    error: null,
    candidates: [
      ...candidates,
      newCandidate
    ]
  };
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
      };
    case UPDATE_CANDIDATE_STATUS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case UPDATE_CANDIDATE_STATUS_SUCCESS:
      return updateStatus(state, action);
    case UPDATE_CANDIDATE_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default candidates;
