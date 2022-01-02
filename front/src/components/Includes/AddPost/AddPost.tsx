import AddPostIcon from '../../../assets/img/headerIcons/add-post.png'
import Modal from '../../Modal/Modal'
import UserPic from '../../UserPic/UserPic'
import './addPost.scss'
import { useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../../store/actions/updatePosts'
import api from '../../../utils/api'
import React from 'react'
import { useUser } from '../../../utils/useUser'

const AddPost: React.FC = () => {

    const [modal,setModal] = useState<boolean>(false);
    const [choosenImgURL,setImgURL] = useState<string>('');
    const [image,setImage] = useState<File | string>('');
    const postText = useRef<HTMLTextAreaElement>(null);
    const fileInput = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const { profile_pic } = useUser();

    const [animation,setAnimaton] = useState(false);

    function browseFiles(){
        fileInput.current!.click();
    }

    function showChoosenPhoto(e: React.ChangeEvent<HTMLInputElement>): void{
        const input = e.target;

        if(input.files && input.files[0]){
            setImage(input.files[0]);
            let reader = new FileReader();
            reader.onload = (e: any): void => {
                setImgURL(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function post(): void{
        let data = new FormData();
        data.append('image',image);
        data.append('text',postText.current!.value);
        api.post('/api/post/save',data,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        .then(() => {
            setModal(false);
            dispatch(updatePosts());
        })
    }
   
    const AddPostModal = () => {
        return(
            <Modal onClick={() => setModal(false)} sm>
                <div className="add-post" onClick={() => setAnimaton(false)}>
                    <div className="add-post__header">
                        <h3>Add post</h3>
                        <button className="button" onClick={ browseFiles }>Choose image</button>
                    </div>
                    {choosenImgURL && <img src={choosenImgURL} width="100"/>}
                    <input type="file" hidden ref={fileInput} onChange={showChoosenPhoto}/>
                    <div className="write-post">
                        <UserPic size={30} imageUrl={ profile_pic }/>
                        <textarea className={`text-input ${animation ? 'increase-height' : 'reduce-height'}`} 
                        placeholder="Write something..." 
                        onClick={(e) => {e.stopPropagation();setAnimaton(true);(e.target as HTMLTextAreaElement).click();}} 
                        ref={postText}></textarea>
                    </div>
                    <button onClick={post} className="button post-button">Post</button>
                </div>
            </Modal>
        )
    }

    return(
        <div>
            <img className="icon" src={AddPostIcon} alt="add post" role="button" onClick={() => setModal(true)}/>
            {modal && <AddPostModal/>}
        </div>
    )
}

export default AddPost