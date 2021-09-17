import InstagramLogo from '../../assets/img/insta-logo.png'
import FacebookLogo from '../../assets/img/facebook-logo.png'
import './auth.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'

const LogIn = () => {

    const apiClient = axios.create({

        baseURL: 'http://localhost:8000',
    
        withCredentials: true,
    
    });

    // useEffect(() => {
        
    //         apiClient.get('/api/user').then(res => {console.log(res)});
      
        

    function show(){
        // console.log(userData)
        // axios.get('http://localhost:8000/api/test').then((red) => {
        //     console.log(red);
        // })
        apiClient.get("/sanctum/csrf-cookie").then((response) => {
            apiClient.post("/api/login", {
                email: 'luka@gmail.com',
                password: 'luka12345'
              })
              .then((response) => {
                console.log(response.data);
              });
            // console.log(response);
          });
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