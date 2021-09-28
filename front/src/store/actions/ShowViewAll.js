export const ShowViewAll = (data,modalAction) => {
    return {
        type: 'shown',
        payload: {...data,modalAction},
    }
}