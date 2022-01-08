import api from "../../utils/api"
import React,{ useRef,useState } from 'react'
// import { useUpdatePosts } from "../../utils/useUpdatePosts";
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../store/actions/updatePosts'
import CircleLoader from '../Loader/CircleLoader'
import IPost from '../../types/Post.type'

interface Props{
    data: IPost;
}

const AddComment: React.FC<Props> = ({ data }) => {

    const comment = useRef<HTMLInputElement | null>(null);
    const [success,setSuccess] = useState<boolean>(false);
    const dispatch = useDispatch();
    
    function writeComment(){
        setSuccess(true);
        api.post('/api/comment/save',{
            user_id: data.user.id,
            post_id: data.id,
            text: comment.current?.value
        })
        .then((resp) => {
                comment.current!.value = '';
                dispatch(updatePosts(resp.data));
                setSuccess(false);
            })
    }
    return(
        <div className="add-comment">
            <span>smile</span>
            <input ref={comment} className="add-comment__input" type="text" placeholder="Add a comment..."/>
            {!success ? <span onClick={writeComment}>Post</span> : <CircleLoader/>}
        </div>
    )
}

export default AddComment