import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';

export function openModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function closeModal() {
  return {
    type: HIDE_MODAL,
  };
}
