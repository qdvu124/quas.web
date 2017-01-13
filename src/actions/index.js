import { SELECT_BOOK, FETCH_BOOK, LOG_IN, LOG_OUT } from '../constants/ActionTypes';
import { getHeader } from '../util/rest';
import { BOOK_API, LOGIN_API, USER_API } from '../constants/API';

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

export function dispatchLogout() {
  alert('Peace out!');
  localStorage.removeItem('token');
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
    return fetch(LOGIN_API, {
      headers: getHeader(),
      method: 'post',
      body: JSON.stringify({
        name,
        password,
      }),
    }).then((response) => {
      if (response.status >= 400) {
        alert('Authentication error!');
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((result) => {
      alert('Authentication successful!');
      localStorage.setItem('token', result.token);
      dispatch(login());
    });
  };
}

export function dispatchRegister(name, password) {
  return (dispatch) => {
    return fetch(USER_API, {
      headers: getHeader(),
      method: 'post',
      body: JSON.stringify({
        name,
        password,
      }),
    }).then((response) => {
      if (response.status >= 400) {
        alert('Authentication error!');
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((result) => {
      console.log(result);
      alert('Registered new user!');
    });
  };
}
