import WhiteHeart from '../../assets/img/headerIcons/Heart/white-heart.png'
import RedHeart from '../../assets/img/heart(1).png'
import CommentIcon from '../../assets/img/comment.png'
import MessageIcon from '../../assets/img/message.png'
import BookmarkIcon from '../../assets/img/bookmark.png'
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../store/actions/updatePosts'
import api from '../../utils/api'
import './post.scss'
import IPost from '../../types/Post.type'
import React from 'react'

interface Props{
    data: IPost;
}

const Reacts: React.FC<Props> = ({ data }) => {

    const dispatch = useDispatch();

    async function likePost(){
        let updatedData = await api.post('/api/like/save',{
            user_id: data.user.id,
            post_id: data.id
        });
        dispatch(updatePosts(updatedData.data));
    }

    async function unLikePost(){
        let updatedData = await api.post('/api/like/delete',{
            user_id: data.user.id,
            post_id: data.id
        })
        dispatch(updatePosts(updatedData.data));
    }

    function checkIfPostIsLiked(likes: IPost["likes"]){
        return likes.filter(like => like.user_id == data.user.id).length > 0
    }

    const UnLiked = () => <img src={WhiteHeart} alt="heart" onClick={likePost}/>;
    const Liked = () => <img style={{width: '25px'}} width="4" src={RedHeart} alt="heart" onClick={unLikePost}/>;

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