import { SELECT_BOOK, FETCH_BOOK } from '../constants/ActionTypes';
import { getHeader } from '../util/rest';
import { API } from '../constants/API';

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book,
  };
}

function fetchBook(books) {
  return {
    type: FETCH_BOOK,
    payload: books,
  };
}

export function retrieveBooks() {
  return (dispatch) => {
    return fetch(API, {
      headers: getHeader(),
      method: 'get',
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((result) => {
      dispatch(fetchBook(result));
    });
  };
}
