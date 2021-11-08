import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setLoader } from '../store/actions/setLoader';
import api from './api'
import IUser from '../types/User.type'
import Cookies from 'universal-cookie'

interface ILogIn{
    loggedIn: boolean;
}

export const useUser = () => {

    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [userData,setUserData] = useState<IUser>();
    const dispatch = useDispatch();
    const state = useSelector((state: ILogIn) => state.loggedIn)
    const cookie = new Cookies();

    // useEffect(() => {
        
    //         setIsLoggedIn(true);
    //     }else{
    //         setIsLoggedIn(false);
    //     }
    // },[]);

    useEffect((): void => {
        (async () => {
            // let token = cookie.get('XSRF-TOKEN');
            // if(!!token && userData === null){
                try{
                    dispatch(setLoader(true));
                    let response = await api.get('/api/user');
                    setIsLoggedIn(true);
                    setUserData(response.data);
                }catch(e: any){
                    setIsLoggedIn(false);
                }finally{
                    dispatch(setLoader(false));
                }
            // }
        })()
    },[]);

    useEffect(() => {
        if(state){
            setIsLoggedIn(true);
        }
    },[state])

    return {
        isLoggedIn,
        id: userData?.id,
        fullname: userData?.fullname,
        username: userData?.username,
        email: userData?.email,
        userPic: userData?.profile_pic,
        user: userData
    };
}