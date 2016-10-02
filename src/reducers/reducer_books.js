require('isomorphic-fetch');

require('es6-promise');

export default function () {
  return [
    { title: 'quas' },
    { title: 'wex' },
    { title: 'exort' }];

    //     fetch(api.API,
    //     {
    //         method: 'GET',
    //     })
    //     .then( response =>  {
    //         if (response.status >= 400) {
    //             throw new Error("Bad response from server");
    //         }
    //         return response.json();
    //     }).then( book => {
    //         return book;
    //     });
}
