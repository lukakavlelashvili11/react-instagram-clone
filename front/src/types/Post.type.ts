import IUser from './User.type'
import ILike from './Like.type'
import IComment from './Comment.type'

interface IPost{
    id: number;
    text: string;
    imageurl: string;
    created_at: number;
    likes: ILike[];
    comments: IComment[];
    user: IUser;
}

export default IPost