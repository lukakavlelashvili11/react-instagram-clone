import UserPic from '../../UserPic/UserPic'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../../utils/api'
import './userSetting.scss'
import React from 'react'

const UserSettings: React.FC = () => {

    const [options,setOptions] = useState<boolean>(false);

    function logOut(){
        api.post('/api/logout');
    }

    const Options = (): JSX.Element => {
        return(
            <div className="options">
                <ul className="options-list">
                    <li className="options-list-item">
                        <Link to='/user'>Profile</Link>
                    </li>
                    <li onClick={logOut}>Log out</li>
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