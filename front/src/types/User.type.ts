import IPost from './Post.type'

interface IUser {
    id: number;
    fullname: string;
    username:string;
    name: string;
    email: string;
    profile_pic: string;
    posts: IPost[]
}

export default IUser