
type Action = {
    type: 'shown',
    payload?: object
}


const isShownViewAll = (state: number = 0,action: Action) => {
    switch(action.type){
        case 'shown':
            return action.payload;
        default:
            return state;
    }
}

export default isShownViewAll