import './header.scss'
import Search from '../Search/Search'
import logo from '../../../assets/img/insta-logo.png'
import HeaderNav from '../HeaderNav/HeaderNav'

const Header = () => {
    return(
        <header class="header">
            <div class="header__inner">
                <img width="100" src={logo} alt="instagram"/>
                <Search/>
                <HeaderNav/>
            </div>
        </header>
    )
}

export default Header