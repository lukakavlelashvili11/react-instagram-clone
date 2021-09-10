import BlackHeart from '../../../assets/img/headerIcons/Heart/black-heart.png'
import WhiteHeart from '../../../assets/img/headerIcons/Heart/white-heart.png'
import './heart.scss'
import { useState } from 'react'

const Heart = () => {
    const [heart,setHeart] = useState(false);
    function toggleNotifications(){
        setHeart(!heart);
    }

    return(
        <div>
            {heart ? <img className="heart-icon" src={BlackHeart} onClick={toggleNotifications}/> : <img className="heart-icon" src={WhiteHeart} onClick={toggleNotifications}/>}
        </div>
    )
}

export default Heart