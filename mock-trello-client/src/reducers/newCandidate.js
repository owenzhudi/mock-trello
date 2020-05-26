import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_PHONE,
  UPDATE_COMMENT,
  SUBMIT_CANDIDATE_REQUEST,
  SUBMIT_CANDIDATE_SUCCESS,
  SUBMIT_CANDIDATE_FAILURE
} from '../constants/actionTypes';

const initialState = {
  candidate: {
    name: '',
    phone: '',
    email: '',
    comment: '',
  },
  loading: true,
  error: null
};

const newCandidate = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        candidate: {
          ...state.candidate,
          name: action.payload.name
        }
      };
    case UPDATE_PHONE:
      return {
        ...state,
        candidate: {
          ...state.candidate,
          phone: action.payload.phone
        }
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        candidate: {
          ...state.candidate,
          email: action.payload.email
        }
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        candidate: {
          ...state.candidate,
          comment: action.payload.comment
        }
      };
    case SUBMIT_CANDIDATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SUBMIT_CANDIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        candidate: action.payload.candidate
      };
    case SUBMIT_CANDIDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default newCandidate;
