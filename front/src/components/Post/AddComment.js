import api from "../../utils/api"
import { useRef } from 'react'
// import { useUpdatePosts } from "../../utils/useUpdatePosts";
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../store/actions/updatePosts'

const AddComment = ({ data }) => {

    const comment = useRef();
    const dispatch = useDispatch();
    
    function writeComment(){
        api.post('/api/comment/save',{
            user_id: data.user.id,
            post_id: data.id,
            text: comment.current.value
        })
        .then(() => {
                comment.current.value = '';
                dispatch(updatePosts());
            }
        )
    }
    return(
        <div className="add-comment">
            <span>smile</span>
            <input ref={comment} className="add-comment__input" type="text" placeholder="Add a comment..."/>
            <span onClick={writeComment}>Post</span>
        </div>
    )
}

export default AddComment