import { combineReducers } from 'redux';
import bookReducer from './BookReducer';
import errorReducer from './ErrorReducer';

export default combineReducers({
  books: bookReducer,
  errors: errorReducer,
});
