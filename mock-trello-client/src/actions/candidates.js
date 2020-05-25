import axios from 'axios';
import {
  GET_ALL_CANDIDATES_REQUEST,
  GET_ALL_CANDIDATES_SUCCESS,
  GET_ALL_CANIDDATES_FAILURE
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
      console.log('response: ', response);
      dispatch(getAllCandidatesSuccess(response.data.candidates));
    })
    .catch(error => {
      dispatch(getAllCandidatesFailure(error));
    });
};
