import './loader.scss'
import LoaderLogo from '../../assets/img/loader-logo.png'
import { useSelector } from 'react-redux'

const Loader = () => {

    const state = useSelector(state => state.load);
    console.log(state);

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