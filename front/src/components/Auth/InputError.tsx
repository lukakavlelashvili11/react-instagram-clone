import './auth.scss'
import React from 'react'

interface Props{
    errors: string[];
}

const InputError: React.FC<Props> = ({ errors }) => {
    return(
        <div className="error-input">
            {errors?.map((error,index) => <span key={index}>{ error }</span>)}
        </div>
    )
}

export default InputError