import { ERROR_PASSWORD, ERROR_USERNAME } from '../constants/ActionTypes';

export function changeUsernameMessage(payload) {
    return {
        type: ERROR_USERNAME,
        payload,
    }
}

export function changePasswordMessage(payload) {
    return {
        type: ERROR_PASSWORD,
        payload,
    }
}
