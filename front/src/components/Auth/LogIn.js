import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/logIn'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useHistory } from "react-router-dom"
import './auth.scss'

const LogIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const email = useRef();
    const password = useRef();

    function show(){
        dispatch(logIn({
            email: email.current.value,
            password: password.current.value
        }));
        history.push('/');
    }

    return (
        <div className="auth">
            <div className="auth__inner">
                <img className="logo" src={InstagramLogo} alt="instagram"/>
                <div className="form">
                    <div className="inputs">
                        <input ref={email} className="input" type="text" placeholder="Email"/>
                        <input ref={password} className="input" type="password" placeholder="Password"/>
                    </div>
                    <button className="button" onClick={show}>
                        <span>Log In</span>
                    </button>
                </div>
                <div className="or">
                    <div className="line"></div>
                    <span>OR</span>
                    <div className="line"></div>
                </div>
                <div className="facebook-login">
                    <img width="15" src={FacebookLogo} alt="facebook"/>
                    <span className="facebook-text">Log in with Facebook</span>
                </div>
                <div className="forgot-password">
                    <span>Forgot password?</span>
                </div>
            </div>
            <div className="create-account">
                <span className="create-account__text">Don't have an account?</span>
                <span className="create-account__text create-account__text--blue">
                    <Link to="/register">Sign up</Link>
                </span>
            </div>
        </div>
    )
}

export default LogIn