import UserItem from "./UserItem"

const data = [1,2,3,4,5]
const UsersSide = () => {
    return(
        <div>
            {data.map(d => <UserItem/>)}
        </div>
    )
}

export default UsersSide