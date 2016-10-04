require('isomorphic-fetch');

export function getHeader() {
  return {
    'Content-Type': 'application/json',
    Authorization: '',
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
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then((message) => {
    console.log(message.message);
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


