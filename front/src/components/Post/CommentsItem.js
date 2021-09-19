const CommentsItem = ({ data }) => {
    return(
        <div className="comments-item">
            <span className="comments-item__user-name">{ data.user.name }</span>
            <span className="comments-item__text">{ data.text }</span>
        </div>
    )
}

export default CommentsItem