import IUser from './User.type'

interface IComment{
    id: number;
    text: string;
    created_at: number;
    user: IUser;
}

export default IComment