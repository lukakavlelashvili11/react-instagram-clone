import './post.scss'
import IPost from '../../types/Post.type'
import React from 'react'

interface Props{
    data: IPost;
}

const Description: React.FC<Props> = ({ data }) => {
    return(
        <div className="description">
            <span className="description__user-name">{ data.user.fullname }</span>
            <span className="description__text">
                { data.text }  
            </span>
        </div>
    )
}

export default Description