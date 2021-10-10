import IUser from './User.type'

interface IComment{
    id: number;
    text: string;
    created_at: string;
    user: IUser;
}

export default IComment