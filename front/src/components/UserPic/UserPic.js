import UserPlaceholder from '../../assets/img/user-placeholder.jpg' 
import PropTypes from 'prop-types'
import './userPic.scss'

const UserPic = ({ size,hasStory }) => {
    return(
        <div className={hasStory && 'insta-circle'}>
            <div className={`user-picture ${hasStory && 'border-around-pic'}`} style={{ height: `${size}px`,width: `${size}px` }}>
                <img src={UserPlaceholder} alt="user"/>
            </div>
        </div>
    )
}

UserPic.propTypes = {
    size: PropTypes.number.isRequired,
}

export default UserPic