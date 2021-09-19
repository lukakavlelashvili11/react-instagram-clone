import isLoggedIn from "./isLoggedIn";
import isUpdated from "./isUpdated";
import { combineReducers } from 'redux'

const Reducers = combineReducers({
    loggedIn: isLoggedIn,
    updated: isUpdated
});

export default Reducers