import './post.scss'
import UserPic from '../UserPic/UserPic'
import Reacts from './Reacts'
import Description from './Description'
import Comments from './Comments'
import AddComment from './AddComment'
import Options from './Options'

const Post = ({ data }) => {
    return(
        <div className="post">
            <div className="post__header">
                <div className="user">
                    <UserPic size={35}/>
                    <div className="user__name">{ data.user.name }</div>
                </div>
                <Options data={data}/>
            </div>
            <div className="post__content">
                <img src={ data.imageurl } className="image"/>
            </div>
            <div className="user-actions">
                <Reacts data={data}/>
                <Description data={ data }/>
                <Comments data={data}/>
            </div>
            <AddComment data={data}/>
        </div>
    )
}

export default Post