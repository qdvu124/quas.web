import { getHeader } from '../util/rest';
import { selectBook, fetchBook } from './book_actions';
import { login, logout } from './auth_actions';
import { changePasswordMessage, changeUsernameMessage } from './auth_error_action';
import { BOOK_API, LOGIN_API, USER_API } from '../constants/API';

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

export function dispatchLogin(username, password) {
  return (dispatch) => {
    return fetch(LOGIN_API, {
      headers: getHeader(),
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.status >= 400) {
        return response.json().then ((result) => {
          throw new Error(result.message);
        });
      }
      return response.json();
    }).then((result) => {
      localStorage.setItem('token', result.token);
      dispatch(login());
    }).catch((error) => { 
      alert(error.message);
    });
  };
}

export function dispatchRegister(username, password) {
  return (dispatch) => {
    return fetch(USER_API, {
      headers: getHeader(),
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.status >= 400) {
        return response.json().then ((result) => {
          console.log(result);
          if (result.field != null) {
            for(var key in result.field) {
              alert(key);
            }
          }
          throw new Error(result.message);
        });
        return response.json();
      }
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      alert(error.message);
    });
  };
}
