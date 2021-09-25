import CommentsItem from "./CommentsItem"
import { useDispatch } from "react-redux"
import { ShowViewAll } from "../../store/actions/ShowViewAll"
import { useEffect } from "react"
// import ViewAll from "./ViewAll/ViewAll";

const Comments = ({ data }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('sdfgsdfg');
        dispatch(ShowViewAll(data))
    },[data]);

    const CommentsCount = () => <span className="comments-quantity" onClick={() => dispatch(ShowViewAll(data))}>view all { data.comments.length } comments</span>;
    return(
        <div className="comments">
            {data.comments.length >= 3 && <CommentsCount/>}
            {data.comments.slice(0,2).map(comment => <CommentsItem data={comment} key={comment.id}/>)}
        </div>
    )
}

export default Comments