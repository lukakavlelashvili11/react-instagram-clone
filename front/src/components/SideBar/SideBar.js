import UserPic from '../UserPic/UserPic'
import './sideBar.scss'

const SideBar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="user">
                    <UserPic size={55}/>
                    <div className="user__name">lukako kavlelashvili</div>
                </div>
                <a href="#" className="switch">Switch</a>
            </div>
        </div>
    )
}

export default SideBar