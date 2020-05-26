import axios from 'axios';
import {
  UPDATE_NAME,
  UPDATE_PHONE,
  UPDATE_EMAIL,
  UPDATE_COMMENT,
  SUBMIT_CANDIDATE_REQUEST,
  SUBMIT_CANDIDATE_SUCCESS,
  SUBMIT_CANDIDATE_FAILURE
} from '../constants/actionTypes';
import { APPLIED } from '../constants/status';

const API_URL = '/api/candidates';

export const updateName = name => ({
  type: UPDATE_NAME,
  payload: { name }
});

export const updatePhone = phone => ({
  type: UPDATE_PHONE,
  payload: { phone }
});

export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: { email }
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  payload: { comment }
});

const submitCandidateRequest = () => ({
  type: SUBMIT_CANDIDATE_REQUEST
});

const submitCandidateSuccess = candidate => ({
  type: SUBMIT_CANDIDATE_SUCCESS,
  payload: { candidate }
});

const submitCandidateFailure = error => ({
  type: SUBMIT_CANDIDATE_FAILURE,
  payload: { error }
})

export const handleSubmitCandidate = () => (dispatch, getState) => {
  const state = getState();
  const newCandidate = {
    ...state.newCandidate.candidate,
    status: APPLIED
  };
  dispatch(submitCandidateRequest());
  axios({
    method: 'POST',
    url: API_URL,
    data: newCandidate
  })
    .then(response => {
      dispatch(submitCandidateSuccess(response.data.candidate));
    })
    .catch(error => {
      dispatch(submitCandidateFailure(error));
    });
};
