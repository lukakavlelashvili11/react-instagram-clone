import moment from 'moment'


export const confMoment = (date) => {
    let fromNow = moment(date).fromNow();
    if(fromNow.includes('a few seconds')){
        return 'secs ago';
    }else if(fromNow.includes('a minute ago')){
        return '1m';
    }else{
        const fn = moment(date).fromNow();
        const hour = fn.replace(/[^a-z]/gi, '').slice(0,1);
        const numb = fn.replace(/[^0-9]/gi, '');
        return numb + hour;
    }
} 