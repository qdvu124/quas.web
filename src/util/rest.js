require('isomorphic-fetch');

export function getHeader() {
  return {
    //React enforce lowercase for headers: https://github.com/facebook/react-native/commit/7069e4cd3f1228e0508988ecdee2afb3899aedfc
    'content-type': 'application/json',
    authorization: (localStorage.getItem('token') == null ? '' : localStorage.getItem('token').replace('Bearer ', '')),
    'x-language': 'en',
  };
}

export function post(api, postBody) {
  console.log(getHeader());
  return fetch(api, {
    headers: (getHeader()),
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
    headers: (getHeader()),
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


