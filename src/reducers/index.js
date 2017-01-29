import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import AuthenticationReducer from './reducer_authentication';
import ErrorReducer from './reducer_errors';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  isAuthenticated: AuthenticationReducer,
  books: BookReducer,
  activeBook: ActiveBookReducer,
  errors: ErrorReducer,
  showModal: ModalReducer,
});

export default rootReducer;
