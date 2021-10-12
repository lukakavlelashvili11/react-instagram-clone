import React,{ useRef } from 'react'
import UserPic from '../UserPic/UserPic'
import api from '../../utils/api'
import { useUser } from '../../utils/useUser'
import './user.scss'

const UserData: React.FC = () => {

    const file = useRef<HTMLInputElement>(null);
    const {fullname,username,userPic} = useUser();

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
                <UserPic hasStory imageUrl={userPic} size={140} onClick={browseFiles}/>
                <input type="file" ref={file} onChange={uploadPhoto} hidden/>
            </div>
            <div className="user-info__data">
                <div className="user-info__data__inner">
                    <div className="user-name-actions">
                        <span className="username">{ username }</span>
                        <button className="edit-profile">Edit Profile</button>
                    </div>
                    <div className="quantities">
                        <span>0 posts</span>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                    <span className="fullname">{ fullname }</span>
                </div>
            </div>
        </div>
    )
}

export default UserData