import UsersSide from '../../components/InboxComponents/UsersSide'
import './inbox.scss'

const Inbox = () => {
    return(
        <div className="inbox">
            <div className="inbox--left">
                <UsersSide/>
            </div>
            <div className="inbox--right">
                <div className="messages-text">
                    <h3>Your Messages</h3>
                    <span>Send private photos and messages to a friend or group.</span>
                </div>
            </div>
        </div>
    )
}

export default Inbox