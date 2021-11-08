import './modal.scss'
import React from 'react'

interface Props{
    sm?: boolean;
    lg?: boolean;
    headerTitle?: string;
    rounded?: boolean;
    onClick: () => void;
}

const Modal:React.FC<Props> = ({ sm,lg,children,rounded,headerTitle,onClick }) => {

    function hideScroll(){
        document.body.style.overflow = 'hidden';
    }

    function showScroll(){
        document.body.style.overflow = 'auto';
    }
    
    const Header = () => {
        return(
            <div className="modal-header">
                <span>{ headerTitle }</span>
            </div>
        )
    }

    return(
        <div className="modal-parent" onClick={() => {onClick();showScroll()}}>
            <div className={`modal ${lg && 'modal-lg'} ${sm && 'modal-sm'} ${rounded && 'rounded-modal'}`} onClick={(e) => {e.stopPropagation()} }>
                { !!headerTitle && <Header/>}
                { children }
            </div>
            {hideScroll()}
        </div>
    )
}

export default Modal;