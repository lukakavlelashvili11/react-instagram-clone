import UserItem from "./UserItem"
import React from 'react'

const data = [1,2,3,4,5]
const UsersSide: React.FC = () => {
    return(
        <div>
            {data.map(d => <UserItem/>)}
        </div>
    )
}

export default UsersSide