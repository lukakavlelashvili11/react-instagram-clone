import IPost from './Post.type'
import IFollow from './Follow.type'

interface IUser {
    id: number;
    fullname: string;
    username:string;
    name: string;
    email: string;
    profile_pic: string;
    posts: IPost[];
    followers: IFollow[];
    following: IFollow[];
}

export default IUser