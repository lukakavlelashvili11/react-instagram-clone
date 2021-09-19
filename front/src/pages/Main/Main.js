import Post from '../../components/Post/Post'
import SideBar from '../../components/SideBar/SideBar'
import './main.scss'
import { useState,useEffect } from 'react'
import api from '../../utils/api'

const data = [1,2,3];

const Main = () => {

    const [posts,setPosts] = useState([]);

    useEffect(async () => {
        const res = await api.get('/api/post');
        console.log(res.data)
        setPosts(res.data);
    },[])

    return(
        <div className="main-page">
            <div className="posts">
                {posts.map(post => <Post data={post} key={post.id}/>)}
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Main