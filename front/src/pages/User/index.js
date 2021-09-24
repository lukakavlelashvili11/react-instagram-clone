import UserPic from "../../components/UserPic/UserPic"
import { useRef } from 'react'
import './user.scss'
import api from "../../utils/api"

const User = () => {

    const file = useRef();

    function browseFiles(){
        file.current.click();
    }

    function uploadPhoto(e){
        let image = e.target.files[0];
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

    return(
        <div className="user-page">
            <UserPic size={130} onClick={browseFiles}/>
            <input type="file" ref={file} onChange={uploadPhoto} hidden/>
        </div>
    )
}

export default User