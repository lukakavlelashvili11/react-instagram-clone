import isLoggedIn from "./isLoggedIn";
import isUpdated from "./isUpdated";
import isShownViewAll from "./isShownViewAll";
import { combineReducers } from 'redux'

const Reducers = combineReducers({
    loggedIn: isLoggedIn,
    updated: isUpdated,
    shown: isShownViewAll
});

export default Reducers