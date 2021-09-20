import UserPic from '../UserPic/UserPic'
import './stories.scss'

const Stories = () => {
    const data = [1,2,3,4,5,6,7,8]

    const UserProfile = () => {
        return(
            <div className="user-profile">
                <UserPic size={50}/>
                <div className="user-name">
                    <span>luka kavlelashvili</span>
                </div>
            </div>
        )
    }
    return(
        <div className="stories">
            {data.map(d => <UserProfile/>)}
        </div>
    )
}

export default Stories