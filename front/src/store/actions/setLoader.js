export const setLoader = (state) => {
    if(state)
        return{
            type: 'show'
        }
    else
        return{
            type: 'close'
        }
}