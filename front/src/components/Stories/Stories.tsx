import UserPic from '../UserPic/UserPic'
import './stories.scss'
import React from 'react'

const Stories: React.FC = () => {
    const data = [1,2,3,4,5,6,7,8]

    const UserProfile = () => {
        return(
            <div className="user-profile">
                <div className="profile-pic">
                    <UserPic size={50} hasStory/>
                </div>
                <div className="user-name">
                    <span>luka kavlelashvili</span>
                </div>
            </div>
        )
    }
    return(
        <div className="stories">
            {data.map(d => <UserProfile key={d}/>)}
        </div>
    )
}

export default Stories