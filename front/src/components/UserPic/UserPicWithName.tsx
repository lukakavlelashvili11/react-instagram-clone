import UserPic from './UserPic'
import './userPic.scss'
import React from 'react'
import IUser from '../../types/User.type'
import IPost from '../../types/Post.type'
import { Link } from 'react-router-dom'

interface Props {
    size: number;
    data: IPost;
}


const UserPicWithName: React.FC<Props> = ({ size,data }) => {
    return(
        <Link to={`/user/${data.user.id}`}>
            <div className="user">
                <UserPic size={size} imageUrl={data.user.profile_pic}/>
                <div className="user__name">{ data.user.fullname }</div>
            </div>
        </Link>
    )
}

export default UserPicWithName