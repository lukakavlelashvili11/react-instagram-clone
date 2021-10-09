
type Action = {
    type: 'show' | 'close'
}


const loaderReducer = (state: boolean = false,action: Action) => {
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