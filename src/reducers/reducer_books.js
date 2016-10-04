import { FETCH_BOOK } from '../constants/ActionTypes';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BOOK:
      console.log(action.payload);
      return {
        books: action.payload,
      };
    default:
      return state;
  }

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
