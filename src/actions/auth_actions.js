import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

export function login() {
  return {
    type: LOG_IN,
  };
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOG_OUT,
  };
}
