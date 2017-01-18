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
        throw new Error(response.statusText);
      }
      return response.json();
    }).catch((error) => { 
      alert(error.message);
    }).then((result) => {
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
        return response.json().then ((result) => {
          console.log(result);
          throw new Error(result.field.password[0]);
        });
        return response.json();
      }
    }).catch((error) => {
      alert(error.message);
    }).then((result) => {
      console.log(result);
    });
  };
}
