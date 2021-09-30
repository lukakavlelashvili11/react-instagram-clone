import isLoggedIn from "./isLoggedIn";
import isUpdated from "./isUpdated";
import isShownViewAll from "./isShownViewAll";
import loaderReducer from './loaderReducer'
import { combineReducers } from 'redux'

const Reducers = combineReducers({
    loggedIn: isLoggedIn,
    updated: isUpdated,
    shown: isShownViewAll,
    load: loaderReducer
});

export default Reducers