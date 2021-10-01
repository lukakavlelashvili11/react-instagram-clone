import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/logIn'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../utils/api'
import './auth.scss'

const Register = () => {

    const dispatch = useDispatch();

    const email = useRef();
    const fullname = useRef();
    const username = useRef();
    const password = useRef();

    function register(e){
        e.preventDefault();
        console.log('adasdasdfasdf')
        api.post('/api/register',{
            email: email.current.value,
            fullname: fullname.current.value,
            username: username.current.value,
            password: password.current.value
        });
    }

    return (
        <div className="auth">
            <div className="auth__inner">
                <img className="logo" src={InstagramLogo} alt="instagram"/>
                <div className="form">
                    <div className="inputs">
                        <form onSubmit={register}>
                            <input ref={email} className="input" type="text" placeholder="Email"/>
                            <input ref={fullname} className="input" type="text" placeholder="Full Name"/>
                            <input ref={username} className="input" type="text" placeholder="Username"/>
                            <input ref={password} className="input" type="password" placeholder="Password"/>
                        </form>
                    </div>
                    <button type="submit" className="button" onClick={register}>
                        <span>Sign up</span>
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
                <span className="create-account__text">Do you have an account?</span>
                <span className="create-account__text create-account__text--blue">
                    <Link to="/login">Log in</Link>
                </span>
            </div>
        </div>
    )
}

export default Register