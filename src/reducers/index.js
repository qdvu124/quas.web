import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
  isAuthenticated: AuthenticationReducer,
  books: BookReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
