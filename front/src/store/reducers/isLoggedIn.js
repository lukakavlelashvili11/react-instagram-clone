const isLoggedIn = (state = false,action) => {
    switch(action.type){
        case 'logIn':
            return !state;
        default:
            return state;
    }
}

export default isLoggedIn