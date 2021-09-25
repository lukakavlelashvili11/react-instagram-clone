import moment from 'moment'


export const confMoment = (date) => {
    let fromNow = moment(date).fromNow();
    if(!fromNow.includes('few')){
        const fn = moment(date).fromNow();
        const hour = fn.replace(/[^a-z]/gi, '').slice(0,1);
        const numb = fn.replace(/[^0-9]/gi, '');
        return numb + hour;
    }else{
        return 'few secs';
    }
} 