import React,{ useEffect,useState } from 'react'
import api from '../../utils/api';
import IUser from '../../types/User.type';
import './user.scss'

interface Props{
    data: IUser | null;
}

const UserPosts: React.FC<Props> = ({ data }) => {

    return(
        <div className="user-posts">
            <div className="user-posts__inner">
                {
                    data?.posts.map(el => 
                        <div className="post-item" key={el.id}>
                            <img src={el.imageurl}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserPosts