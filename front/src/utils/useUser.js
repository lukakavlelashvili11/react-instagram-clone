import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setLoader } from '../store/actions/setLoader';
import api from './api'

export const useUser = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userData,setUserData] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector(state => state.loggedIn)

    useEffect(async () => {
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
        },[]);

        useEffect(() => {
            if(state){
                setIsLoggedIn(true);
            }
        },[state])

        return {
            isLoggedIn,
            name: userData?.fullname,
            email: userData?.email
        };
}