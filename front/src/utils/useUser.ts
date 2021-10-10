import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setLoader } from '../store/actions/setLoader';
import api from './api'
import IUser from '../types/User.type'

interface ILogIn{
    loggedIn: boolean;
}

export const useUser = () => {

    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [userData,setUserData] = useState<IUser | null>(null);
    const dispatch = useDispatch();
    const state = useSelector((state: ILogIn) => state.loggedIn)

    useEffect((): void => {
        (async () => {
            if(!isLoggedIn){
                try{
                    dispatch(setLoader(true));
                    let response = await api.get('/api/user');
                    setIsLoggedIn(true);
                    setUserData(response.data);
                }catch(e){
                    setIsLoggedIn(false);
                }finally{
                    dispatch(setLoader(false));
                }
            }
        })()
    },[]);

    useEffect(() => {
        if(state){
            setIsLoggedIn(true);
        }
    },[state])

    return {
        isLoggedIn,
        fullname: userData?.fullname,
        username: userData?.username,
        email: userData?.email,
        userPic: userData?.profile_pic
    };
}