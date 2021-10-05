import UserPic from './UserPic'
import './userPic.scss'
import React from 'react'
import User from '../../types/User.type'

interface Props {
    size: number;
    data: object;
}


const UserPicWithName: React.FC<Props> = ({ size,data }) => {
    return(
        <div className="user">
            <UserPic size={size} imageUrl={data.user.profile_pic}/>
            <div className="user__name">{ data.user.fullname }</div>
        </div>
    )
}

export default UserPicWithName