import './auth.scss'
const InputError = ({ errors }) => {
    return(
        <div className="error-input">
            {errors?.map((error,index) => <span key={index}>{ error }</span>)}
        </div>
    )
}

export default InputError