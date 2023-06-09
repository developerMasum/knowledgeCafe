import React, { useState } from "react";
import { useEffect } from "react";
import SingleNews from "../SingleNews/SingleNews";

const Main = ({ handleSpendTime, handleBookMark }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      {news.map((singleNews) => (
        <SingleNews
        key = {singleNews.id}
          singleNews={singleNews}
          handleSpendTime={handleSpendTime}
          handleBookMark={handleBookMark}
        ></SingleNews>
      ))}
      {/* console.log(singleNews); */}
    </div>
  );
};

export default Main;
