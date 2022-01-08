import IPost from "../../types/Post.type"

export const updatePosts = (data?: IPost) => {
    return {
        type: 'updated',
        payload: data
    }
}