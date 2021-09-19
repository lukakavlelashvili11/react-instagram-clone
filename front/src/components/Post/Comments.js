import CommentsItem from "./CommentsItem"

const Comments = ({ data }) => {
    const CommentsCount = () => <span className="comments-quantity">view all { data.comment.length } comments</span>;
    return(
        <div className="comments">
            {!!data.comment.length && <CommentsCount/>}
            {data.comment.map(comment => <CommentsItem data={comment} key={comment.id}/>)}
        </div>
    )
}

export default Comments