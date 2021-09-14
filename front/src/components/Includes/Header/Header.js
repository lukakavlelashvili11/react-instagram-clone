import './header.scss'
import Search from '../Search/Search'
import logo from '../../../assets/img/insta-logo.png'
import HeaderNav from '../HeaderNav/HeaderNav'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className="header">
            <div className="header__inner">
                <Link to="/">
                    <img width="100" src={logo} alt="instagram"/>
                </Link>
                <Search/>
                <HeaderNav/>
            </div>
        </header>
    )
}

export default Header