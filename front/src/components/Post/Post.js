import './post.scss'
import test from './roxi.jpg'
import UserPic from '../UserPic/UserPic'
import Reacts from './Reacts'
import Description from './Description'
import Comments from './Comments'
import AddComment from './AddComment'

const Post = ({ data }) => {
    return(
        <div className="post">
            <div className="post__header">
                <div className="user">
                    <UserPic size={35}/>
                    <div className="user__name">{ data.user.name }</div>
                </div>
            </div>
            <div className="post__content">
                <img src={ data.imageurl } className="image"/>
            </div>
            <div className="user-actions">
                <Reacts/>
                <Description data={ data }/>
                <Comments/>
            </div>
            <AddComment/>
        </div>
    )
}

export default Post