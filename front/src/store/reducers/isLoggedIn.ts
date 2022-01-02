type Action = {
    type: 'loggedIn',
    payload?: object
}

const isLoggedIn = (state: number = 0,action: Action) => {
    switch(action.type){
        case 'loggedIn':
            return action.payload;
        default:
            return state;
    }
}

export default isLoggedIn