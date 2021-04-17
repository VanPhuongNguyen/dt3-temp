import { combineReducers } from 'redux';
import users from './users';
import search from './search'

const rootReducer = combineReducers({
  users,
  search
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
