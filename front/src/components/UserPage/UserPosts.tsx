import React,{ useEffect,useState } from 'react'
import api from '../../utils/api';
import IPost from '../../types/Post.type';
import './user.scss'

const UserPosts: React.FC = () => {

    const [posts,setPosts] = useState<IPost[]>([]);

    useEffect((): void => {
        (async (): Promise<void> => {
            let data = await api.get('/api/post');
            setPosts(data.data);
        })()
    });

    return(
        <div className="user-posts">
            <div className="user-posts__inner">
                {
                    posts.map(el => 
                        <div className="post-item">
                            <img src={el.imageurl}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserPosts