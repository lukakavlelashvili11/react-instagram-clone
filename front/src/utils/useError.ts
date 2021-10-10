export const useError = (error: any) => {
    if(error?.response && error?.response.status == 422){
        var errors = error?.response.data.errors;
    }
    if(error?.response && error?.response.status == 401){
        var userErr: string[] | undefined = ['Account does not exist!'];
    }
    return{
        emailErr: errors?.email,
        passwordErr: errors?.password,
        fullnameErr: errors?.fullname,
        usernameErr: errors?.username,
        userErr
    }
}