import UserPic from '../../UserPic/UserPic'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../../utils/api'
import { useUser } from '../../../utils/useUser'
import './userSetting.scss'
import Cookies from 'universal-cookie'

const UserSettings: React.FC = () => {

    const {profile_pic,id} = useUser();
    const [options,setOptions] = useState<boolean>(false);
    const cookie = new Cookies();

    async function logOut(){
        await api.post('/api/logout');
        cookie.remove('XSRF-TOKEN');
    }

    const Options = (): JSX.Element => {
        return(
            <div className="options">
                <ul className="options-list">
                    <li className="options-list-item">
                        <Link to={`/user/${id}`}>Profile</Link>
                    </li>
                    <li onClick={logOut}>Log out</li>
                </ul>
            </div>
        )
    }

    return(
        <div>
            <div onClick={ () => setOptions(!options) }>
                <UserPic size={25} imageUrl={profile_pic}/>
            </div>
            {options && <Options/>}
        </div>
    )
}

export default UserSettings