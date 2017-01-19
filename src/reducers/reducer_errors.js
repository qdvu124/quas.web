import { ERROR_USERNAME, ERROR_PASSWORD } from '../constants/ActionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case ERROR_USERNAME:
            return {
                errorUsername: action.payload,
                errorPassword,
            }
        case ERROR_PASSWORD:
            return {
                errorUsername,
                errorPassword: action.payload,
            }
        default:
            return state;
    }
}