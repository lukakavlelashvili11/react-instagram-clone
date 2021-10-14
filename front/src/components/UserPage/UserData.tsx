import React,{ useRef } from 'react'
import UserPic from '../UserPic/UserPic'
import api from '../../utils/api'
import { useUser } from '../../utils/useUser'
import IUser from '../../types/User.type'
import './user.scss'

interface Props{
    data: IUser | null;
}

const UserData: React.FC<Props> = ({ data }) => {

    const file = useRef<HTMLInputElement>(null);

    function browseFiles(){
        file.current!.click();
    }

    function uploadPhoto(e: React.ChangeEvent<HTMLInputElement>){
        let image: File = e.target.files![0];
        let formData = new FormData();
        formData.append('profile_pic',image);
        api.post('/api/user/store/picture',formData,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div className="user-info">
            <div className="user-info__picture">
                <UserPic hasStory imageUrl={data?.profile_pic} size={140} onClick={browseFiles}/>
                <input type="file" ref={file} onChange={uploadPhoto} hidden/>
            </div>
            <div className="user-info__data">
                <div className="user-info__data__inner">
                    <div className="user-name-actions">
                        <span className="username">{ data?.username }</span>
                        <button className="edit-profile">Edit Profile</button>
                    </div>
                    <div className="quantities">
                        <span>{ data?.posts.length } posts</span>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                    <span className="fullname">{ data?.fullname }</span>
                </div>
            </div>
        </div>
    )
}

export default UserData