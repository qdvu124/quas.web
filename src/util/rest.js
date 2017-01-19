require('isomorphic-fetch');

export function getHeader() {
  return {
    'Content-Type': 'application/json',
    //TODO: There might be a safer way of doing this...
    Authorization: localStorage.getItem('token') == null ? '' : localStorage.getItem('token').replace('Bearer ', ''),
    'X-Language': '',
  };
}

export function post(api, postBody) {
  console.log(getHeader());
  return fetch(api, {
    headers: getHeader(),
    method: 'post',
    body: JSON.stringify(postBody),
  }).then((response) => {
    console.log(response);
    if (response.status >= 400) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).catch((error) => {
    alert(error.message);
  }).then((message) => {
    alert(message.message);
  });
}

export function get(api) {
  return fetch(api, {
    headers: getHeader(),
    method: 'get',
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then((message) => {
    console.log(message.message);
  });
}


