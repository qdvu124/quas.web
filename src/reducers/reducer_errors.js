import { ERROR_USERNAME, ERROR_PASSWORD, RESET_ERROR } from '../constants/ActionTypes';

const initialState = {
    errorUsername: '',
    errorPassword: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ERROR_USERNAME:
            return {
                ...state,
                errorUsername: action.payload,
            };
        case ERROR_PASSWORD:
             return {
                ...state,
                errorPassword: action.payload,
            };
        case RESET_ERROR:
            return initialState;
        default:
            return state;
    }
}