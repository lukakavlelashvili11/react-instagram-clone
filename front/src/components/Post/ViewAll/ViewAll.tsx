import Modal from '../../Modal/Modal'
import { useState,useEffect,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ShowViewAll } from '../../../store/actions/ShowViewAll'
import UserPicWithName from '../../UserPic/UserPicWithName'
import Options from '../Options'
import './viewAll.scss'
import UserPic from '../../UserPic/UserPic'
import Description from '../Description'
import Comment from './Comment'
import Reacts from '../Reacts'
import Moment from 'react-moment'
import AddComment from '../AddComment'
import React from 'react'
import IPost  from '../../../types/Post.type'
// import IShownViewAll from '../../../store/reducers/isShownViewAll'

interface IShown extends IPost{
    modalAction: boolean;
}
interface IShownViewAll{
    shown: IShown;
}

// interface IShown{
//     shown: object;
// }

const ViewAll: React.FC = () => {

    const [modal,setModal] = useState<boolean>(false);
    // const [modalDataUpdate,setModalDataUpdate] = useState(false);
    const [userTextsHeight,setUserTextsHeight] = useState<number>(160)
    const state = useSelector((state: IShownViewAll) => state.shown);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!!state && state.modalAction){
            setModal(true);
        }
    },[state])



    function hideModal(){
        dispatch(ShowViewAll(undefined,false));
        setModal(false);
    }

    function getModalHeight(el: HTMLDivElement | null){
        if(el){
            let height = el.offsetHeight;
            if(height > 250){
                let userTexts = height - 240;
                setUserTextsHeight(userTexts);
            }
        }
    }

    const ViewAllModal = (): JSX.Element => {
        return(
            <Modal onClick={hideModal} lg>
                <div className="view-all" ref={el => {getModalHeight(el)}}>
                    <div className="image-side">
                        <img src={state.imageurl} alt="image" />
                    </div>
                    <div className="comments-side">
                        <div className="user-details">
                            <UserPicWithName size={35} data={state}/>
                            <Options/>
                        </div>
                        <div className="user-texts" style={{ height: userTextsHeight+'px' }}>
                            <div className="user-description">
                                <UserPic size={35} imageUrl={state.user.profile_pic}/>
                                <Description className="description" data={state}/>
                            </div>
                            <div className="comment-section">
                                {state.comments.map(comment => <Comment data={comment} key={comment.id}/>)}
                            </div>
                        </div>
                        <div className="user-actions">
                            <div className="user-reacts">
                                <Reacts data={state}/>
                                <div className="date">
                                    <Moment element="span" fromNow>{state.created_at}</Moment>
                                </div>
                            </div>
                            <div className="write-comment">
                                <AddComment data={ state }/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
    return(
        <div>
            { modal && <ViewAllModal/> }
        </div>
    )
}

export default ViewAll