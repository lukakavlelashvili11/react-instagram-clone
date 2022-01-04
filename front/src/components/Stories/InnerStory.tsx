import React, { useState,useEffect } from 'react'
import FastAverageColor from 'fast-average-color'
import './stories.scss'

// const data = {
//     user1:{
//         images: [
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
//             'https://i.natgeofe.com/n/cf723856-1469-4e0c-be4f-ed0871547491/tbilisi-old-town-georgia_16x9.jpg?w=1200'
//         ]
//     },
//     user2:{
//         images: [
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
//         ]
//     }
// }

const InnerStory: React.FC = () => {

    const av = new FastAverageColor();
    const [avColor,setAvColor] = useState<string>('');
    // const [currentUrl,setCurrentUrl] = useState<string>('https://i.natgeofe.com/n/cf723856-1469-4e0c-be4f-ed0871547491/tbilisi-old-town-georgia_16x9.jpg?w=1200');
    

    // function getAverageColor(): void{
    //     let color = av.getColor(document.querySelector('#story-img'));
    //     setAvColor(color.hex);
    //     // return color.hex;
    //     // av.getColorAsync(url,{ algorithm: 'dominant' })
    //     // .then((color) => {
    //     //     setAvColor(color.hex);
    //     // })
    //     // return avColor;
    // }

    useEffect(() => {
        av.getColorAsync('http://localhost:8000/storage/uploads/4/posts/1641336033_Christmas-tree-holiday-pine.jpg',{crossorigin: "anonymous"})
        .then((color) => {
            setAvColor(color.hex);
        })
        // let color = av.getColor(document.querySelector('#story-img'));
    })

    // function sw(){
    //     const len = data.user1.images.length;
    //     let i = 0;
    //     setCurrentUrl(data.user1.images[i++]);
    // }


    return(
        <div className="inner-story" style={{ backgroundColor:  avColor}}>
            <div className="story-switcher story-switcher--left">left</div>
            <img id="story-img" src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt="story"/>
            <div className="story-switcher" >right</div>
        </div>
    )
}

export default InnerStory