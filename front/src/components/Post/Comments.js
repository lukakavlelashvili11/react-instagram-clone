import CommentsItem from "./CommentsItem"

const Comments = ({ data }) => {
    const CommentsCount = () => <span className="comments-quantity">view all { data.comments.length } comments</span>;
    return(
        <div className="comments">
            {data.comments.length >= 3 && <CommentsCount/>}
            {data.comments.slice(0,2).map(comment => <CommentsItem data={comment} key={comment.id}/>)}
        </div>
    )
}

export default Comments