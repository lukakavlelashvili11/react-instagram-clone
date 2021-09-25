import ThreeDots from '../../assets/img/three-dots.png'
import { useState } from 'react'
import api from '../../utils/api'
import { useDispatch } from 'react-redux'
import { updatePosts } from '../../store/actions/updatePosts'
import './post.scss'

const Options = ({ data }) => {

    const [optionsBox,setOptiosBox] = useState(false);
    const dispatch = useDispatch();

    function deletePost(){
        api.post('/api/post/delete',{
            user_id: data.user.id,
            id: data.id
        })
        .then(() => {
            dispatch(updatePosts);
        })
    }

    const OptionsBox = () => {
        return(
            <div className="options-box">
                <ul className="options-list">
                    <li className="options-list-item" onClick={deletePost}>delete</li>
                </ul>
            </div>
        )
    }

    return(
        <div>
            <img className="three-dots" src={ThreeDots} onClick={ () => setOptiosBox(!optionsBox) }/>
            {optionsBox && <OptionsBox/>}
        </div>
    )
}

export default Options