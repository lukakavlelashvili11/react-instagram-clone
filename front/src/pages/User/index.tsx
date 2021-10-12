import React from 'react'
import UserData from '../../components/UserPage/UserData'
import UserPosts from '../../components/UserPage/UserPosts'
import './userPage.scss'

const User: React.FC = () => {

    return(
        <div className="user-page">
            <UserData/>
            <UserPosts/>
        </div>
    )
}

export default User