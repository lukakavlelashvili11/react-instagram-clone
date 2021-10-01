import UserPic from './UserPic'
import './userPic.scss'

const UserPicWithName = ({ size,data }) => {
    return(
        <div className="user">
            <UserPic size={size} imageUrl={data.user.profile_pic}/>
            <div className="user__name">{ data.user.fullname }</div>
        </div>
    )
}

export default UserPicWithName