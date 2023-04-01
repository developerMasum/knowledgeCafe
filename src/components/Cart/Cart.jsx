import React from "react";

const Cart = ({ spendTime, blogs }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      <div className="spend-time">
        {" "}
        <div className="card">
          <div className="card-body bg-info bg-opacity-50 shadow  rounded">
            <h5 className="card-title">
              Spent time on read : {spendTime} minutes
            </h5>
          </div>
        </div>
      </div>

      <div className="card shadow-2xl mt-5 ">
        <div className="card-body bg-secondary bg-opacity-50 shadow rounded ">
          <h3>Bookmarked Blogs :{blogs.length} </h3>
        </div>
      </div>
      {blogs.map((blog) => (
        <div className="card-body bg-secondary bg-opacity-25 shadow p-3 mb-2  rounded card shadow-2xl mt-2 ">
          <h4>{blog.title} </h4>
        </div>
      ))}
    </div>
  );
};

export default Cart;
