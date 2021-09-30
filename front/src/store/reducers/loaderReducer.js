const loaderReducer = (state = false,action) => {
    switch(action.type){
        case 'show':
            return !state;
        case 'close':
            return false;
        default:
            return state;
    }
}

export default loaderReducer