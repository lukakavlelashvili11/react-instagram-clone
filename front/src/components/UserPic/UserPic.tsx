import UserPlaceholder from '../../assets/img/user-placeholder.jpg' 
import './userPic.scss'
import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    size: number;
    hasStory?: boolean;
    onClick?: () => void;
    imageUrl?: string;
}

const UserPic: React.FC<Props> = ({ size,hasStory,onClick,imageUrl }) => {
    return(
        // <Link to="/user/2">
            <div className={`circle ${hasStory && 'insta-circle'}`} onClick={onClick}>
                <div className={`user-picture ${hasStory && 'border-around-pic'}`} style={{ height: `${size}px`,width: `${size}px` }}>
                    <img src={imageUrl ? imageUrl : UserPlaceholder} alt="user"/>
                </div>
            </div>
        // </Link>
    )
}

export default UserPic