import { SELECT_BOOK, FETCH_BOOK } from '../constants/ActionTypes';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book,
  };
}

export function fetchBook(books) {
  return {
    type: FETCH_BOOK,
    payload: books,
  };
}
