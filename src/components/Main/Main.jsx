import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleNews from '../SingleNews/SingleNews';

const Main = ({handleSpendTime}) => {
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
        news.map(singleNews => <SingleNews singleNews={singleNews} handleSpendTime = {handleSpendTime}></SingleNews>)
       }

        </div>
    )};


export default Main;