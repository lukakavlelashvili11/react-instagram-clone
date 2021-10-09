export const ShowViewAll = (data?: object,modalAction?: boolean) => {
    return {
        type: 'shown',
        payload: {...data,modalAction},
    }
}