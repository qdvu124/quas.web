require('isomorphic-fetch');
require('es6-promise');
import * as api from '../constants/API'

export default function () {
    
    //return [
    //{ title: 'one' }, 
    //{ title: 'two' }, 
    //{ title: 'three' }];

        return fetch(api.API,
        {
            method: 'GET',
        })
        .then( response =>  {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then( book => {
            return book;
        });
}
