import UserPic from "../../components/UserPic/UserPic"
import './user.scss'

const User = () => {
    return(
        <div className="user">
            <UserPic size={100}/>
        </div>
    )
}

export default User