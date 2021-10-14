import React from 'react'
import IUser from '../../types/User.type'
import Heart from '../../assets/img/white-heart.png'
import Comment from '../../assets/img/comment-icon.png'
import { useDispatch } from 'react-redux'
import { ShowViewAll } from '../../store/actions/ShowViewAll'
import './user.scss'

interface Props{
    data: IUser | null;
}

const UserPosts: React.FC<Props> = ({ data }) => {

    const dispatch = useDispatch();

    return(
        <div className="user-posts">
            <div className="user-posts__inner">
                {
                    data?.posts.map(el => 
                        <div className="post-col" key={el.id}>
                            <div className="post-col__inner">
                                <div className="post-info" onClick={() => {dispatch(ShowViewAll(el,true))}}>
                                    <div className="post-info__inner">
                                        <div className="user-actions-quantity">
                                            <img src={Heart} alt="likes"/>
                                            <span>{ el.likes.length }</span>
                                        </div>
                                        <div className="user-actions-quantity">
                                            <img className="comment-icon" src={Comment} alt="comments"/>
                                            <span>{ el.comments.length }</span>
                                        </div>
                                    </div>
                                </div>
                                <img src={el.imageurl}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserPosts