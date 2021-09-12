import WhiteHeart from '../../assets/img/headerIcons/Heart/white-heart.png'
import CommentIcon from '../../assets/img/comment.png'
import MessageIcon from '../../assets/img/message.png'
import BookmarkIcon from '../../assets/img/bookmark.png'

const Reacts = () => {
    return(
        <div className="reacts">
            <div className="reacts__inner">
                <div className="reacts__inner--left">
                    <img src={WhiteHeart} alt="heart"/>
                    <img src={CommentIcon} alt="comment"/>
                    <img src={MessageIcon} alt="heart"/>
                </div>
                <div className="reacts__inner--right">
                    <img src={BookmarkIcon} alt="bookmark"/>
                </div>
            </div>
            <div>200 likes</div>
        </div>
    )
}

export default Reacts