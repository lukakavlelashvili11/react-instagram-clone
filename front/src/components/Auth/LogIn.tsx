import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import InputError from './InputError'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/logIn'
import { Link } from 'react-router-dom'
import { useRef,useState } from 'react'
import { useHistory } from "react-router-dom"
import { useError } from '../../utils/useError'
import api from '../../utils/api'
import AuthLoader from '../Loader/CircleLoader'
import './auth.scss'
import React from 'react'


const LogIn: React.FC = () => {

    const [loader,setLoader] = useState<boolean>(false);
    const [error,setError] = useState<object | null>(null);
    const {emailErr,passwordErr,userErr} = useError(error);
    const dispatch = useDispatch();
    const history = useHistory();
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);


    function logInUser(){
        api.get("/sanctum/csrf-cookie").then(async () => {
            try{
                setLoader(true);
                let response = await api.post("/api/login", {
                    email: email.current?.value,
                    password: password.current?.value 
                });
                history.push('/');
                dispatch(logIn(response.data));
            }catch(e: any){
                setError(e);
            }finally{
                setLoader(false);
            }
        }); 
    }

    return (
        <div className="auth">
            <div className="auth__inner">
                <img className="logo" src={InstagramLogo} alt="instagram"/>
                <div className="form">
                    <form onSubmit={(e) => {e.preventDefault(); logInUser()}}>
                    <InputError errors={userErr}/>
                        <div className="inputs">
                            <InputError errors={emailErr}/>
                            <input ref={email} className="input" type="text" placeholder="Email"/>
                            <InputError errors={passwordErr}/>
                            <input ref={password} className="input" type="password" placeholder="Password"/>
                        </div>
                        <button type="submit" className="button" onClick={logInUser}>
                            <span>Log In</span>
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
                <span className="create-account__text">Don't have an account?</span>
                <span className="create-account__text create-account__text--blue">
                    <Link to="/register">Sign up</Link>
                </span>
            </div>
        </div>
    )
}

export default LogIn