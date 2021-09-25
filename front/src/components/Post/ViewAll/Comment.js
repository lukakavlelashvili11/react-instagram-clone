import UserPic from "../../UserPic/UserPic"
import CommentsItem from "../CommentsItem"
// import {confMoment} from "../../../utils/confMoment"
import moment from 'moment'
import './viewAll.scss'

const Comment = ({ data }) => {
    // const start = confMoment(data.created_at);
    const confMoment = (date) => {
        let fromNow = moment(date).fromNow();
        if(!fromNow.includes('few')){
            const fn = moment(date).fromNow();
            const hour = fn.replace(/[^a-z]/gi, '').slice(0,1);
            const numb = fn.replace(/[^0-9]/gi, '');
            return numb + hour;
        }else{
            return 'few secs';
        }
    } 
    return(
        <div className="comment">
            <UserPic size={35} imageUrl={data.user.profile_pic}/>
            <div className="comment__inner">
                <CommentsItem className="comment-item" data={data}/>
                <span className="date">{confMoment(data.created_at)}</span>
            </div>
        </div>
    )
}

export default Comment