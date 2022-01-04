import React,{ useRef,useState } from 'react'
import UserPic from '../UserPic/UserPic'
import api from '../../utils/api'
import { useUser } from '../../utils/useUser'
import IUser from '../../types/User.type'
import Modal from '../Modal/Modal'
import './user.scss'
import UserPicWithName from '../UserPic/UserPicWithName'

interface Props{
    data: IUser | null;
}

const UserData: React.FC<Props> = ({ data }) => {

    const file = useRef<HTMLInputElement>(null);
    const {id} = useUser();
    const [followData,setFollowData] = useState<IUser[]>([]);
    const [modalTitle,setModalTitle] = useState<string>('');

    function browseFiles(){
        if(id === data?.id){
            file.current!.click();
        }
    }

    function uploadPhoto(e: React.ChangeEvent<HTMLInputElement>){
        let image: File = e.target.files![0];
        let formData = new FormData();
        formData.append('profile_pic',image);
        api.post('/api/user/store/picture',formData,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
    }

    function haveFollowed(): boolean{
        if(data?.followers.length === 0){
            return false;
        }else{
            return !!data?.followers.filter(({ id }) => id === id);
        }
    }

    async function follow(user_id?: number): Promise<void>{
        let data = await api.post(`/api/follow/save/${user_id}`);
    }

    const EditButton = (): JSX.Element => <button className="edit-profile">Edit Profile</button>;
    const FollowButton = (): JSX.Element => <button className="follow-profile" onClick={() => follow(data?.id)}>Follow</button>;

    const FollowUsersModal = (): JSX.Element => {
        return(
            <Modal onClick={() => setFollowData([])} headerTitle={modalTitle} rounded sm>
                <ul className="follow-data">
                    {followData?.map(user => {
                        return(
                            <li className="follow-data__item" key={user.id}>
                                <UserPicWithName size={40} data={user}/>
                            </li>
                        )
                    })}
                </ul>
            </Modal>
        )
    };

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
                        { id === data?.id ? <EditButton/> : (!haveFollowed() && <FollowButton/>)}
                    </div>
                    <div className="quantities">
                        <span>{ data?.posts.length } posts</span>
                        <span className="follow-info" onClick={() => { setFollowData(data!.followers);setModalTitle('followers'); }}>{ data?.followers.length } followers</span>
                        <span className="follow-info" onClick={() => { setFollowData(data!.following);setModalTitle('following'); }}>{ data?.following.length } following</span>
                    </div>
                    <span className="fullname">{ data?.fullname }</span>
                </div>
            </div>
            { !!followData.length && <FollowUsersModal/> }
        </div>
    )
}

export default UserData