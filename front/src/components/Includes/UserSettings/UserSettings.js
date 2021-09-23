import UserPic from '../../UserPic/UserPic'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './userSetting.scss'

const UserSettings = () => {

    const [options,setOptions] = useState(false);

    const Options = () => {
        return(
            <div className="options">
                <ul className="options-list">
                    <li className="options-list-item">
                        <Link to='/user'>Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    return(
        <div>
            <div onClick={ () => setOptions(!options) }>
                <UserPic size={25}/>
            </div>
            {options && <Options/>}
        </div>
    )
}

export default UserSettings