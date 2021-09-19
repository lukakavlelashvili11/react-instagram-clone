import CommentsItem from "./CommentsItem"

const Comments = ({ data }) => {
    const CommentsCount = () => <span className="comments-quantity">view all { data.comments.length } comments</span>;
    return(
        <div className="comments">
            {!!data.comments.length && <CommentsCount/>}
            {data.comments.map(comment => <CommentsItem data={comment} key={comment.id}/>)}
        </div>
    )
}

export default Comments