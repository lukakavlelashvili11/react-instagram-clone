import UserPlaceholder from '../../assets/img/user-placeholder.jpg' 
import PropTypes from 'prop-types'
import './userPic.scss'

const UserPic = ({ size }) => {
    return(
        <div className="user-picture" style={{ height: `${size}px`,width: `${size}px` }}>
            <img src={UserPlaceholder} alt="user"/>
        </div>
    )
}

UserPic.propTypes = {
    size: PropTypes.number.isRequired
}

export default UserPic