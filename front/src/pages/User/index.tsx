import React,{ useEffect,useState } from 'react'
import UserData from '../../components/UserPage/UserData'
import UserPosts from '../../components/UserPage/UserPosts'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import IUser from '../../types/User.type'
import './userPage.scss'

interface ParamsType{
    id?: string | undefined;
}

const User: React.FC = () => {

    const { id } = useParams<ParamsType>();
    const [data,setData] = useState<IUser | null>(null);

    useEffect(() => {
        (async () => {
            let resp = await api.get(`/api/user/${id}?post=1`);
            setData(resp.data);
            console.log(resp.data);
        })()
    },[id])

    return(
        <div className="user-page">
            <UserData data={data}/>
            <UserPosts data={data}/>
        </div>
    )
}

export default User