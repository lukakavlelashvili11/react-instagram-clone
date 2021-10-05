import './loader.scss'
import LoaderLogo from '../../assets/img/loader-logo.png'
import { useSelector } from 'react-redux'


const Loader = () => {

    const state = useSelector<boolean>(state => state.load);

    const LoaderComponent = (): JSX.Element => {
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