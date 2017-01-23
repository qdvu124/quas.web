import { FETCH_BOOK } from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
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
