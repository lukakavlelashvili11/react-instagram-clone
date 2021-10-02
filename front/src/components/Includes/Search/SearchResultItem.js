import './search.scss'
import UserPic from '../../UserPic/UserPic'

const SearchResultItem = ({ user }) => {
    return(
        <div className="search-result__item">
            <UserPic size={45} imageUrl={user.profile_pic}/>
            <div className="names">
                <span className="username">{ user.username }</span>
                <span className="fullname">{ user.fullname }</span>
            </div>
        </div>
    )
}

export default SearchResultItem