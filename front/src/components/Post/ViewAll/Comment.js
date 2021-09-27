import UserPic from "../../UserPic/UserPic"
import CommentsItem from "../CommentsItem"
import { confMoment } from "../../../utils/confMoment"
import './viewAll.scss'

const Comment = ({ data }) => {
    return(
        <div className="comment">
            <UserPic size={35} imageUrl={data.user.profile_pic}/>
            <div className="comment__inner">
                <CommentsItem className="comment-item" data={data}/>
                <span className="date">{ confMoment(data.created_at) }</span>
            </div>
        </div>
    )
}

export default Comment