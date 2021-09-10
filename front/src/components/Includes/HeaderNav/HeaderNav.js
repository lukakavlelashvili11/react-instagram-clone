import BlackHome from '../../../assets/img/headerIcons/Home/black-home.png'
import WhiteHome from '../../../assets/img/headerIcons/Home/white-home.png'
import BlackInbox from '../../../assets/img/headerIcons/Inbox/black-inbox.png'
import WhiteInbox from '../../../assets/img/headerIcons/Inbox/white-inbox.png'
import BlackExplore from '../../../assets/img/headerIcons/Explore/black-explore.webp'
import WhiteExplore from '../../../assets/img/headerIcons/Explore/white-explore.png'
import Heart from '../Heart/Heart'
import './headerNav.scss'
import { useLocation,Link } from 'react-router-dom'

const HeaderNav = () => {
    const location = useLocation();

    return(
        <div className="header-nav">
            <Link to="/">
                {location.pathname === '/' ? <img className="icon" src={ BlackHome } alt="home"/> : <img className="icon" src={ WhiteHome } alt="home" />}
            </Link>
            <Link to="/inbox">
                {location.pathname === '/inbox' ? <img className="icon" src={ BlackInbox } alt="inbox"/> : <img className="icon" src={ WhiteInbox } alt="inbox" />}
            </Link>
            <Link to="/explore">
                {location.pathname === '/explore' ? <img className="icon" src={ BlackExplore } alt="explore"/> : <img className="icon" src={ WhiteExplore } alt="explore" />}
            </Link>
            <Heart/>
        </div>
    )
}

export default HeaderNav