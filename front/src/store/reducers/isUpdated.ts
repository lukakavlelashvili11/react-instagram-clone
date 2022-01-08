import IPost from "../../types/Post.type";

type Action = {
    type: 'updated',
    payload: IPost
}

const isUpdated = (state: boolean = false,action: Action) => {
    switch(action.type){
        case 'updated':
            return action.payload;
        default: 
            return state;
    }
}

export default isUpdated