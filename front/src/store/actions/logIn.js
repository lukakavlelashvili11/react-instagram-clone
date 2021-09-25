import api from "../../utils/api"

export const logIn = () => async (dispatch) => {
   return  api.get("/sanctum/csrf-cookie").then(() => {
        api.post("/api/login", {
            email: 'luka1@gmail.com',
            password: 'luka12345'
            })
            .then((response) => {
            api.get('/api/user')
            .then(res => {
                console.log(res);
                dispatch({
                    type: 'loggedIn',
                    payload: res.data
                });
            })
        });
    });   
}