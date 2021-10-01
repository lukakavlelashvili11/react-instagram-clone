import api from "../../utils/api"

export const logIn = ( data ) => async ( dispatch ) => {
    return  api.get("/sanctum/csrf-cookie").then(() => {
        api.post("/api/login", {
                ...data
            })
            .then(() => {
            api.get('/api/user')
            .then(res => {
                dispatch({
                    type: 'loggedIn',
                    payload: res.data
                });
            })
        });
    });   
}