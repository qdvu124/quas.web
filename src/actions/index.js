import { SELECT_BOOK } from '../constants/Actions'

export function selectBook(book) {
    return {
        type: SELECT_BOOK,
        book,
    }
}