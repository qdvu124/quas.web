import { ERROR_PASSWORD, ERROR_USERNAME, RESET_ERROR } from '../constants/ActionTypes';

export function changeErrorMessage(error, payload) {
  switch (error) {
    case 'username':
      return {
        type: ERROR_USERNAME,
        payload,
      };
    case 'password':
      return {
        type: ERROR_PASSWORD,
        payload,
      };
    default:
      return {};
  }
}

export function resetErrorMessages() {
  return {
    type: RESET_ERROR,
  };
}
