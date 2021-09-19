const isUpdated = (state = false,action) => {
    switch(action.type){
        case 'updated':
            return !state;
        default: 
            return state;
    }
}

export default isUpdated