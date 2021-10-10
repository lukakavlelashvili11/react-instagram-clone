import './loader.scss'
import LoaderLogo from '../../assets/img/loader-logo.png'
import { useSelector } from 'react-redux'
import React from 'react'

interface IState{
    load: boolean;
}

const Loader: React.FC = () => {

    const state = useSelector((state: IState) => state.load);

    const LoaderComponent = () => {
        return(
            <div className="loader">
                <img width="50" src={LoaderLogo} alt="loader-logo"/>
            </div>
        )
    }

    return(
        <div>
            { state && <LoaderComponent/> }
        </div>
    )
}

export default Loader