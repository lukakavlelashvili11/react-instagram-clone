export const setLoader = (state: object) => {
    if(state)
        return{
            type: 'show'
        }
    else
        return{
            type: 'close'
        }
}