import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

export default function (state = false, action) {
  switch (action.type) {
    case LOG_IN:
      return true;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
}
