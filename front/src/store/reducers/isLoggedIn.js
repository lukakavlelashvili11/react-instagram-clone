const isLoggedIn = (state = false,action) => {
    switch(action.type){
        case 'loggedIn':
            return !state;
        default:
            return state;
    }
}

export default isLoggedIn