import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setLoader } from '../store/actions/setLoader';
import api from './api'
import IUser from '../types/User.type'
import { logIn } from '../store/actions/logIn';
// import Cookies from 'universal-cookie'

interface ILogIn{
    loggedIn: IUser;
}

export const useUser = () => {

    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [userData,setUserData] = useState<IUser>();
    const dispatch = useDispatch();
    const state = useSelector((state: ILogIn) => state.loggedIn)
    // const cookie = new Cookies();

    // useEffect(() => {
        
    //         setIsLoggedIn(true);
    //     }else{
    //         setIsLoggedIn(false);
    //     }
    // },[]);
    // function storeUser(user: IUser){
    //     cookie.set('user',user);
    //     // console.log('sdfgsdfsdfg');
    //     // console.log(cookie.get('user'));

    useEffect((): void => {
        (async () => {
            if(!!!state){
                try{
                    dispatch(setLoader(true));
                    let response = await api.get('/api/user');
                    dispatch(logIn(response.data));
                    setIsLoggedIn(true);
                    // storeUser(response.data);
                    // setUserData(response.data);
                }catch(e: any){
                    setIsLoggedIn(false);
                }finally{
                    dispatch(setLoader(false));
                }
            }
        })()
    },[])
    // }

    useEffect((): void => {
        if(!!state){
            setIsLoggedIn(true);
            setUserData(state);
        }else{
            setIsLoggedIn(false);
        }
    },[state]);

    // useEffect(() => {
    //     if(state){
    //         setIsLoggedIn(true);
    //     }
    // },[state])

    return {
        isLoggedIn,
        ...userData,
        user: userData
    };
}