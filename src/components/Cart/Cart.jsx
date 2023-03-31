import React from 'react';



const Cart = ({spendTime,blogs}) => {
  console.log(blogs);



    return (
        <div style={{
          position: "sticky",
          top: 0
        }}>
           <div className="spend-time"> <div className="card">
 
  <div className="card-body bg-info bg-opacity-50">
    <h5 className="card-title">Spent time on read : {spendTime} minutes</h5>
    
   
  </div>
</div></div>

<div className="card shadow-2xl mt-5 " >
 
  <div className="card-body bg-secondary bg-opacity-25 ">
    <h4>Bookmarked Blogs :{blogs.length}  </h4>
    {
      blogs.map(blog=> <h2>{blog.title} </h2>)
    }
    
   
  </div>
</div>




        </div>
    );
};

export default Cart;