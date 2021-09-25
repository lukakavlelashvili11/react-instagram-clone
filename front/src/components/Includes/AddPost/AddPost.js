import AddPostIcon from '../../../assets/img/headerIcons/add-post.png'
import Modal from '../../Modal/Modal'
import './addPost.scss'
import { useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../../store/actions/updatePosts'
import api from '../../../utils/api'

const AddPost = () => {

    const [modal,setModal] = useState(false);
    const [choosenImgURL,setImgURL] = useState('');
    const [image,setImage] = useState(null);
    const postText = useRef();
    const fileInput = useRef();
    const dispatch = useDispatch();

    function browseFiles(){
        fileInput.current.click();
    }

    function showChoosenPhoto(e){
        const input = e.target;

        if(input.files && input.files[0]){
            setImage(input.files[0]);
            let reader = new FileReader();
            reader.onload = (e) => {
                setImgURL(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function post(){
        let data = new FormData();
        data.append('image',image);
        data.append('text',postText.current.value);
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
                <div className="add-post">
                    <div className="add-post__header">
                        <h3>Add post</h3>
                        <button className="button" onClick={ browseFiles }>Choose image</button>
                    </div>
                    {/* <div className="add-post__body"> */}
                        {choosenImgURL && <img src={choosenImgURL} width="100"/>}
                        <input type="file" hidden ref={fileInput} onChange={showChoosenPhoto}/>
                        <textarea className="text-input" placeholder="Write something..." ref={postText}></textarea>
                        <button onClick={post} className="button post-button">Post</button>
                    {/* </div> */}
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