import WhiteHeart from '../../assets/img/headerIcons/Heart/white-heart.png'
import RedHeart from '../../assets/img/red-heart.png'
import CommentIcon from '../../assets/img/comment.png'
import MessageIcon from '../../assets/img/message.png'
import BookmarkIcon from '../../assets/img/bookmark.png'
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../store/actions/updatePosts'
import api from '../../utils/api'

const Reacts = ({ data }) => {

    const dispatch = useDispatch();

    function likePost(){
        api.post('/api/like/save',{
            user_id: data.user.id,
            post_id: data.id
        })
        .then(() => {
            dispatch(updatePosts());
        })
    }

    function unLikePost(){
        api.post('/api/like/delete',{
            user_id: data.user.id,
            post_id: data.id
        })
        .then(() => {
            dispatch(updatePosts());
        })
    }

    function checkIfPostIsLiked(likes){
        return likes.filter(like => like.user_id == data.user.id).length > 0
    }

    const UnLiked = () => <img src={WhiteHeart} alt="heart" onClick={likePost}/>;
    const Liked = () => <img src={RedHeart} alt="heart" onClick={unLikePost}/>;

    return(
        <div className="reacts">
            <div className="reacts__inner">
                <div className="reacts__inner--left">
                    {checkIfPostIsLiked(data.likes) ? <Liked/>  : <UnLiked/>}
                    <img src={CommentIcon} alt="comment"/>
                    <img src={MessageIcon} alt="heart"/>
                </div>
                <div className="reacts__inner--right">
                    <img src={BookmarkIcon} alt="bookmark"/>
                </div>
            </div>
            {data.likes.length == 1 ? <div>1 like</div> : <div>{data.likes.length} likes</div>}
        </div>
    )
}

export default Reacts