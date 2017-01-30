import { getHeader } from '../util/rest';
import { fetchBook } from './book_actions';
import { login } from './auth_actions';
import { changeErrorMessage } from './auth_error_action';
import { BOOK_API, LOGIN_API, USER_API } from '../constants/API';

export function retrieveBooks() {
  return (dispatch) => {
    return fetch(BOOK_API, {
      headers: getHeader(),
      method: 'get',
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((result) => {
      dispatch(fetchBook(result));
    }).catch((error) => {
      console.log(error);
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
        return response.json().then((result) => {
          let key;
          if (result.field != null) {
            for (key in result.field) {
              dispatch(changeErrorMessage(key, result.field[key][0]));
            }
          }
          throw new Error(result.message);
        });
      }
      return response.json();
    }).then((result) => {
      localStorage.setItem('token', result.token);
      dispatch(login());
    }).catch((error) => {
      // Handle errors here
      console.log(error);
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
        return response.json().then((result) => {
          let key;
          if (result.field != null) {
            for (key in result.field) {
              dispatch(changeErrorMessage(key, result.field[key][0]));
            }
          }
          throw new Error(result.message);
        });
      }
      return response.json();
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      // Handle errors
      console.log(error);
    });
  };
}
