import Post from '../../components/Post/Post'
import SideBar from '../../components/SideBar/SideBar'
import Stories from '../../components/Stories/Stories'
import './main.scss'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import api from '../../utils/api'
import IPost from '../../types/Post.type'

interface IState{
    updated: IPost;
}

const Main = () => {

    const [posts,setPosts] = useState<IPost[]>([]);
    const updatedState = useSelector((state: IState) => state.updated);

    useEffect(() => {
        (async () => {
            const res = await api.get('/api/post');
            setPosts(res.data);
            console.log(res.data);
        })()
    },[]);

    useEffect(() => {
        posts.forEach((post,i: number) => {
            if(post.id === updatedState.id){
                let newArr = [...posts];
                newArr[i] = updatedState;
                setPosts(newArr);
            }
        })
    },[updatedState])

    return(
        <div className="main-page">
            <div>
                <Stories/>
                <div className="posts">
                    {posts.map((post: IPost) => <Post data={post} key={post.id}/>)}
                </div>
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Main