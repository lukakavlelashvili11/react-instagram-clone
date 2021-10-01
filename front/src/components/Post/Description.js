import './post.scss'

const Description = ({ data }) => {
    return(
        <div className="description">
            <span className="description__user-name">{ data.user.fullname }</span>
            <span className="description__text">
                { data.text }  
            </span>
        </div>
    )
}

export default Description