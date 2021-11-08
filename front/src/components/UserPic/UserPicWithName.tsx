import UserPic from './UserPic'
import './userPic.scss'
import React from 'react'
import IUser from '../../types/User.type'
import { Link } from 'react-router-dom'

interface Props {
    size: number;
    withoutFN?: boolean;
    data?: IUser;
}


const UserPicWithName: React.FC<Props> = ({ size,withoutFN,data }) => {
    return(
        <Link to={`/user/${data?.id}`}>
            <div className="user">
                <UserPic size={size} imageUrl={data?.profile_pic}/>
                <div className="user-names">
                    <div className="username">{ data?.username }</div>
                    { !withoutFN && <div className="fullname">{ data?.fullname }</div> }
                </div>
            </div>
        </Link>
    )
}

export default UserPicWithName