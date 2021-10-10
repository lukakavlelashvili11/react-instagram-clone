import UserPic from '../UserPic/UserPic'
import './inbox.scss'
import React from 'react'

const UserItem: React.FC = () => {
    return(
        <div className="user-item">
            <UserPic size={50}/>
            <div className="user-item__info">
                <span className="user-name">lukako kavlelasvhii</span>
                <span className="activate-date">4 yeasr ago</span>
            </div>
        </div>
    )
}

export default UserItem