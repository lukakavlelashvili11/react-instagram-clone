import UserPic from '../UserPic/UserPic'
import { useUser } from '../../utils/useUser'
import './sideBar.scss'

const SideBar = () => {

    const { name,userPic } = useUser();
    console.log(userPic)
    
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="user">
                    <UserPic size={55} imageUrl={userPic}/>
                    <div className="user__name">{ name }</div>
                </div>
                <a href="#" className="switch">Switch</a>
            </div>
        </div>
    )
}

export default SideBar