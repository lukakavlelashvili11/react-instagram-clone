import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/logIn'
import { Link } from 'react-router-dom'
import { useRef,useState } from 'react'
import api from '../../utils/api'
import './auth.scss'
import { useError } from '../../utils/useError'
import InputError from './InputError'
import AuthLoader from './AuthLoader'
import React from 'react'

const Register: React.FC = () => {

    const dispatch = useDispatch();
    const [loader,setLoader] = useState<boolean>(false);
    const [error,setError] = useState<object | null>(null);
    const {emailErr,usernameErr,fullnameErr,passwordErr} = useError(error);

    const emailRef = useRef<HTMLInputElement>(null);
    const fullnameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function register(e: React.SyntheticEvent): Promise<void>{
        e.preventDefault();
        try{
            setLoader(true);
            await api.post('/api/register',{
                email: emailRef.current?.value,
                fullname: fullnameRef.current?.value,
                username: usernameRef.current?.value,
                password: passwordRef.current?.value
            });
        }catch(err: any){
            setError(err);
        }finally{
            setLoader(false);
        }
    }

    return (
        <div className="auth">
            <div className="auth__inner">
                <img className="logo" src={InstagramLogo} alt="instagram"/>
                <div className="form">
                    <form onSubmit={register}>
                        <div className="inputs">
                            <InputError errors={emailErr}/>
                            <input ref={emailRef} className="input" type="text" placeholder="Email"/>
                            <InputError errors={fullnameErr}/>
                            <input ref={fullnameRef} className="input" type="text" placeholder="Full Name"/>
                            <InputError errors={usernameErr}/>
                            <input ref={usernameRef} className="input" type="text" placeholder="Username"/>
                            <InputError errors={passwordErr}/>
                            <input ref={passwordRef} className="input" type="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="button">
                            <span>Sign up</span>
                        </button>
                    </form>
                </div>

                { loader && <AuthLoader/> }

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