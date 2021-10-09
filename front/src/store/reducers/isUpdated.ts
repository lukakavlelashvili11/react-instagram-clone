
type Action = {
    type: 'updated'
}

const isUpdated = (state: boolean = false,action: Action) => {
    switch(action.type){
        case 'updated':
            return !state;
        default: 
            return state;
    }
}

export default isUpdated