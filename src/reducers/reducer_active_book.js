import { SELECT_BOOK } from '../constants/ActionTypes';

export default function (state = {
  activeBook: null,
}, action) {
  switch (action.type) {
    case SELECT_BOOK:
      return {
        activeBook: action.payload,
      };
    default:
      return state;
  }
}
