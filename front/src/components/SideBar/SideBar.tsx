import UserPicWithName from '../UserPic/UserPicWithName'
import { useUser } from '../../utils/useUser'
import './sideBar.scss'

const SideBar = () => {

    const { user } = useUser();
    
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="user">
                    {/* <UserPic size={80} imageUrl={userPic}/> */}
                    <UserPicWithName size={70} data={user}/>
                </div>
                <a href="#" className="switch">Switch</a>
            </div>
        </div>
    )
}

export default SideBar