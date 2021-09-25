import './post.scss'
import Reacts from './Reacts'
import Description from './Description'
import Comments from './Comments'
import AddComment from './AddComment'
import Options from './Options'
import UserPicWithName from '../UserPic/UserPicWithName'
import Moment from 'react-moment'

const Post = ({ data }) => {
    return(
        <div className="post">
            <div className="post__header">
                <UserPicWithName size={30} data={data}/>
                <Options data={data}/>
            </div>
            <div className="post__content">
                <img src={ data.imageurl } className="image"/>
            </div>
            <div className="user-actions">
                <Reacts data={data}/>
                <Description data={ data }/>
                <Comments data={data}/>
                <div className="date">
                    <Moment element="span" fromNow>{data.created_at}</Moment>
                </div>
            </div>
                <AddComment data={data}/>
        </div>
    )
}

export default Post