import isLoggedIn from "./isLoggedIn";
import { combineReducers } from 'redux'

const Reducers = combineReducers({
    loggedIn: isLoggedIn
});

export default Reducers