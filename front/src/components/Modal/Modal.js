import './modal.scss'

const Modal = ({ sm,lg,children,onClick }) => {

    function hideScroll(){
        document.body.style.overflow = 'hidden';
    }

    function showScroll(){
        document.body.style.overflow = 'auto';
    }

    return(
        <div className="modal-parent" onClick={() => {onClick();showScroll()}}>
            <div className={`modal ${lg && 'modal-lg'} ${sm && 'modal-sm'}`} onClick={(e) => {e.stopPropagation()} }>
                { children }
            </div>
            {hideScroll()}
        </div>
    )
}

export default Modal;