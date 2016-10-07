import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

function defaultState() {
  return (localStorage.getItem('token') != null);
}

console.log(localStorage.getItem('token'));

export default function (state = defaultState(), action) {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}
