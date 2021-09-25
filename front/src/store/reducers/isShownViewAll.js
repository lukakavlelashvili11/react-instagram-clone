const isShownViewAll = (state = 0,action) => {
    switch(action.type){
        case 'shown':
            return action.payload;
        default:
            return state;
    }
}

export default isShownViewAll