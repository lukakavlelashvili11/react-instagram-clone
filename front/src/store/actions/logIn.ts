import { AxiosResponse } from "axios"
import IUser from "../../types/User.type"

export const logIn = (userData: AxiosResponse<any>) => {
    return{
        type: 'loggedIn',
        payload: userData
    }
}