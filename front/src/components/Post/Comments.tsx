import CommentsItem from "./CommentsItem"
import { useDispatch } from "react-redux"
import { ShowViewAll } from "../../store/actions/ShowViewAll"
import { useEffect,useState } from "react"
// import ViewAll from "./ViewAll/ViewAll";
import React from 'react'
import IPost from '../../types/Post.type'

interface Props{
    data: IPost;
}

const Comments: React.FC<Props> = ({ data }) => {

    const dispatch = useDispatch();
    const [dataId,setDataId] = useState(data.id);

    useEffect(() => {
        if(data.id == dataId){
            dispatch(ShowViewAll(data,false));
            setDataId(data.id);
        }
    },[data]);

    const CommentsCount = () => <span className="comments-quantity" onClick={() => dispatch(ShowViewAll(data,true))}>view all { data.comments.length } comments</span>;
    return(
        <div className="comments">
            {data.comments.length >= 3 && <CommentsCount/>}
            {data.comments.slice(0,2).map(comment => <CommentsItem data={comment} key={comment.id}/>)}
        </div>
    )
}

export default Comments