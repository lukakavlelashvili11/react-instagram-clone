import React from 'react'
import { ArrayDestructuringAssignment } from 'typescript'
import IComment from '../../types/Comment.type'

interface Props{
    data: IComment;
    className?: string;
}

const CommentsItem: React.FC<Props> = ({ data }) => {
    return(
        <div className="comments-item">
            <span className="comments-item__user-name">{ data.user.fullname }</span>
            <span className="comments-item__text">{ data.text }</span>
        </div>
    )
}

export default CommentsItem