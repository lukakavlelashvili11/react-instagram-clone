import './modal.scss'

const Modal = ({ children,onClick }) => {

    return(
        <div className="modal-parent" onClick={onClick}>
            <div className="modal" onClick={(e) => {e.stopPropagation()} }>
                { children }
            </div>
        </div>
    )
}

export default Modal;