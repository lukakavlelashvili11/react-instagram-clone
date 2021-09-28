import CommentsItem from "./CommentsItem"
import { useDispatch } from "react-redux"
import { ShowViewAll } from "../../store/actions/ShowViewAll"
import { useEffect,useState } from "react"
// import ViewAll from "./ViewAll/ViewAll";

const Comments = ({ data }) => {

    const dispatch = useDispatch();
    const [dataId,setDataId] = useState(data.id);

    useEffect(() => {
        console.log(dataId);
        if(data.id == dataId){
            dispatch(ShowViewAll(data,false));
            setDataId(data.id);
            console.log(dataId);
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