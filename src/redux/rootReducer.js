import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import userDetailsReducer from './UserDetails/userdetails.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    userDetail: userDetailsReducer
});

export default rootReducer;