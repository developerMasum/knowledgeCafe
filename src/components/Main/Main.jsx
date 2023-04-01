import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleNews from '../SingleNews/SingleNews';

const Main = ({handleSpendTime,handleBookMark}) => {
    // console.log(singleNews);


    const [news,setNews] = useState([])
  useEffect( ()=>{
    fetch('data.json')
    .then(res=>res.json()) 
    .then(data=>setNews(data))
  },[])
  

    // const {image,title,authorName,uploadTime,readingTime,authorImg
    // } = singleNews;

   

    return (
        <div>
             {
        news.map(singleNews => <SingleNews
             singleNews={singleNews}
              handleSpendTime = {handleSpendTime}
      
              handleBookMark={handleBookMark}
              ></SingleNews>)
       }
       {/* console.log(singleNews); */}

        </div>
    )};


export default Main;