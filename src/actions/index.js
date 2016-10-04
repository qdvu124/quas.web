import { SELECT_BOOK, FETCH_BOOK, LOG_IN, LOG_OUT } from '../constants/ActionTypes';
import { getHeader } from '../util/rest';
import { BOOK_API, LOGIN_API } from '../constants/API';

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

function login() {
  return {
    type: LOG_IN,
  };
}

function logout() {
  return {
    type: LOG_OUT,
  };
}

export function retrieveBooks() {
  return (dispatch) => {
    return fetch(BOOK_API, {
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

export function dispatchLogin(name, password) {
  return (dispatch) => {
    console.log({
      name,
      password,
    });
    return fetch(LOGIN_API, {
      headers: getHeader(),
      method: 'post',
      body: {
        name,
        password,
      },
    }).then((response) => {
      console.log(response);
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((result) => {
      console.log(result);
    });
  };
}
