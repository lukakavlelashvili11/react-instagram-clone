import './search.scss'
import UserPic from '../../UserPic/UserPic'
import React from 'react'
import IUser from '../../../types/User.type'
import UserPicWithName from '../../UserPic/UserPicWithName'

interface Props{
    data: IUser;
}

const SearchResultItem: React.FC<Props> = ({ data }) => {
    return(
        <div className="search-result__item">
            <UserPicWithName size={45} data={data}/>
        </div>
    )
}

export default SearchResultItem