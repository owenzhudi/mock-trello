import axios from 'axios';
import {
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_ALL_CANIDDATES_FAILURE,
  UPDATE_CANDIDATE_STATUS_REQUEST,
  UPDATE_CANDIDATE_STATUS_SUCCESS,
  UPDATE_CANDIDATE_STATUS_FAILURE
} from '../constants/actionTypes';

const API_URL = '/api/candidates';

const getAllCandidatesRequest = () => ({
  type: GET_ALL_CANDIDATES_REQUEST
});

const getAllCandidatesSuccess = candidates => ({
  type: GET_ALL_CANDIDATES_SUCCESS,
  payload: {
    candidates
  }
});

const getAllCandidatesFailure = error => ({
  type: GET_ALL_CANIDDATES_FAILURE,
  payload: {
    error
  }
});

export const getAllCandidates = () => dispatch => {
  dispatch(getAllCandidatesRequest());
  axios.get(API_URL)
    .then(response => {
      dispatch(getAllCandidatesSuccess(response.data.candidates));
    })
    .catch(error => {
      dispatch(getAllCandidatesFailure(error));
    });
};

const updateCandidateStatusRequest = () => ({
  type: UPDATE_CANDIDATE_STATUS_REQUEST
});

const updateCandidateStatusSuccess = (_id, status) => ({
  type: UPDATE_CANDIDATE_STATUS_SUCCESS,
  payload: {
    _id,
    status
  }
});

const updateCandidateStatusFailure = error => ({
  type: UPDATE_CANDIDATE_STATUS_FAILURE,
  payload: {
    error
  }
});

export const updateCandidateStatus = (_id, status) => dispatch => {
  dispatch(updateCandidateStatusRequest());
  axios({
    method: 'PUT',
    url: `${API_URL}/${_id}/status`,
    data: { status }
  })
    .then(response => {
      dispatch(updateCandidateStatusSuccess(_id, status));
    })
    .catch(error => {
      dispatch(updateCandidateStatusFailure(error));
    });
};
