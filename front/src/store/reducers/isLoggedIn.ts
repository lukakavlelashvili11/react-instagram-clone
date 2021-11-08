type Action = {
    type: 'loggedIn'
}

const isLoggedIn = (state: boolean = false,action: Action) => {
    switch(action.type){
        case 'loggedIn':
            return !state;
        default:
            return state;
    }
}

export default isLoggedIn