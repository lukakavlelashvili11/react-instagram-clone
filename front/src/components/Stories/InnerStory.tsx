import React, { useState,useEffect } from 'react'
import FastAverageColor from 'fast-average-color'
import './stories.scss'

const data = [
    {
        user:{
            images: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
                'https://i.natgeofe.com/n/cf723856-1469-4e0c-be4f-ed0871547491/tbilisi-old-town-georgia_16x9.jpg?w=1200',
                'http://localhost:8000/storage/uploads/4/posts/1641649952_Christmas-tree-holiday-pine.jpg'
            ]
        }
    },
    {
        user:{
            images: [
                'https://eskipaper.com/images/images-2.jpg'
            ]
        }
    }
];

const InnerStory: React.FC = () => {

    const av = new FastAverageColor();
    const [avColor,setAvColor] = useState<string>('');
    const [currentUrl,setCurrentUrl] = useState<string>('');
    let [index,setIndex] = useState<number>(0);
    let [userIndex,setUserIndex] = useState<number>(0)
    

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

    // useEffect(() => {
    //     av.getColorAsync('http://localhost:8000/storage/uploads/4/posts/1641649952_Christmas-tree-holiday-pine.jpg')
    //     .then((color) => {
    //         setAvColor(color.hex);
    //     })
    //     // let color = av.getColor(document.querySelector('#story-img'));
    // })
    useEffect(() => {
        setCurrentUrl(data[0].user.images[index]);
    },[]);

    let i = 0;
    function sw(){

        let len = data[userIndex].user.images.length;
        setIndex(++index);
        if(index < len){
            setCurrentUrl(data[0].user.images[index]);
        }else{
            setIndex(0);
            setUserIndex(++userIndex);
            setCurrentUrl(data[userIndex].user.images[index]);
        }
        // console.log(i);

        // const len = data.user1.images.length;
        // let i = 0;
        // setCurrentUrl(data.user1.images[i++]);
        // let image = new Image;
        // image.crossOrigin="anonymous";
        // image.src = 'http://localhost:8000/storage/uploads/4/posts/1641649952_Christmas-tree-holiday-pine.jpg';
        // let color = av.getColor(image);
        // console.log(color);
    }


    return(
        <div className="inner-story" style={{ backgroundColor:  avColor}}>
            <div className="story-switcher story-switcher--left">left</div>
            <img id="story-img" src={currentUrl} alt="story"/>
            <div className="story-switcher" onClick={sw}>right</div>
        </div>
    )
}

export default InnerStory