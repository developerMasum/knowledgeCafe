import React, { useState } from "react";

const SingleNews = ({ singleNews, handleSpendTime, handleBookMark }) => {
  const {
    image,
    postTimeAgo,
    title,
    authorName,
    uploadTime,
    readingTime,
    authorImg,
  } = singleNews; 

  return (
    <div>
      <div className="card ms-5 me-5 mb-5 mx-auto">
        <img src={image} className=" h-45 w-80" alt="..." />

        {/* grid */}
        <div className="row mt-2 d-flex justify-content-around">
          <div className="col-md-2 ">
            <img className=" w-50 ms-5" src={authorImg} alt="" />
          </div>
          <div className="col-md-6 text-start">
            <h4>{authorName}</h4>
            <h6>
              {uploadTime} ({postTimeAgo} ago)
            </h6>
          </div>
          <div className="col-md-4 d-flex ">
            <div>
              <p className=" me-3 text-end py-2  "> {readingTime}minutes</p>
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleBookMark(singleNews)}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-25"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h3>{title}</h3>
        </div>

        <div className="container d-flex">
          <p className="me-3">#programming</p>
          <p>#phython</p>
        </div>
        <p>
          <a
            onClick={() => handleSpendTime(readingTime)}
            className="link-opacity-100 ms-3"
            href="#ok"
          >
            mark as read
          </a>
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
