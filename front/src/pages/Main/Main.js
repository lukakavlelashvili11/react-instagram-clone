import Post from '../../components/Post/Post'
import SideBar from '../../components/SideBar/SideBar'
import Stories from '../../components/Stories/Stories'
import './main.scss'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import api from '../../utils/api'

const Main = () => {

    const [posts,setPosts] = useState([]);
    const updatedState = useSelector(state => state.updated);

    useEffect(async () => {
        const res = await api.get('/api/post');
        console.log(res.data)
        setPosts(res.data);
    },[updatedState])

    return(
        <div className="main-page">
            <div>
                <Stories/>
                <div className="posts">
                    {posts.map(post => <Post data={post} key={post.id}/>)}
                </div>
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Main