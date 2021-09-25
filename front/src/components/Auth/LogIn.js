import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/actions/logIn'
import './auth.scss'
// import { useState,useEffect } from 'react'
import axios from 'axios'

const LogIn = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
        
    //         apiClient.get('/api/user').then(res => {console.log(res)});
      
        // useEffect(()=>{console.log(cookie)},[]);

    function show(){
        dispatch(logIn());
    }

    return (
        <div className="auth">
            <div className="auth__inner">
                <img className="logo" src={InstagramLogo} alt="instagram"/>
                <div className="form">
                    <div className="inputs">
                        <input className="input" type="text" placeholder="email"/>
                        <input className="input" type="password" placeholder="password"/>
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
                <span className="create-account__text create-account__text--blue">Sign up</span>
            </div>
        </div>
    )
}

export default LogIn