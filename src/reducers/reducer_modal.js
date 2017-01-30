import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';

export default function (state = false, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}
