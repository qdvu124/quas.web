import { SELECT_BOOK } from '../constants/Actions'

export default function (state = null, action){
    switch(action.type) {
        case SELECT_BOOK:
            return action.book;
    }
    return state;
}