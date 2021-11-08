import './post.scss'
import Reacts from './Reacts'
import Description from './Description'
import Comments from './Comments'
import AddComment from './AddComment'
import Options from './Options'
import UserPicWithName from '../UserPic/UserPicWithName'
import Moment from 'react-moment'
import React from 'react'
import Ipost from '../../types/Post.type'

interface Props{
    data: Ipost
}

const Post: React.FC<Props> = ({ data }) => {
    return(
        <div className="post">
            <div className="post__header">
                <UserPicWithName size={30} data={data.user} withoutFN/>
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