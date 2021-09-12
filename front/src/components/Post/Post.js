import './post.scss'
import test from './roxi.jpg'
import UserPic from '../UserPic/UserPic'
import Reacts from './Reacts'
import Description from './Description'
import Comments from './Comments'

const Post = ({ num }) => {
    return(
        <div className="post">
            <div className="post__header">
                <div className="user">
                    <UserPic size={35}/>
                    <div className="user__name">lukako kavlelasvhili</div>
                </div>
            </div>
            <div className="post__content">
                <img src={test} className="image"/>
            </div>
            <div className="user-actions">
                <Reacts/>
                <Description/>
                <Comments/>
            </div>
        </div>
    )
}

export default Post