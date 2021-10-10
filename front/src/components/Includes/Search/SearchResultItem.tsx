import './search.scss'
import UserPic from '../../UserPic/UserPic'
import React from 'react'
import IUser from '../../../types/User.type'

interface Props{
    data: IUser;
}

const SearchResultItem: React.FC<Props> = ({ data }) => {
    return(
        <div className="search-result__item">
            <UserPic size={45} imageUrl={data.profile_pic}/>
            <div className="names">
                <span className="username">{ data.username }</span>
                <span className="fullname">{ data.fullname }</span>
            </div>
        </div>
    )
}

export default SearchResultItem