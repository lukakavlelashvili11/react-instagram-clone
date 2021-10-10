export const setLoader = (state: boolean) => {
    if(state)
        return{
            type: 'show'
        }
    else
        return{
            type: 'close'
        }
}