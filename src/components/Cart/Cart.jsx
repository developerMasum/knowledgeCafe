import React from 'react';

const Cart = ({spendTime,title}) => {
    return (
        <div style={{
          position: "sticky",
          top: 0
        }}>
           <div className="spend-time"> <div className="card">
 
  <div className="card-body">
    <h5 className="card-title">Spent time on read :{spendTime}</h5>
    
   
  </div>
</div></div>

<div className="card shadow-2xl mt-5" >
 
  <div className="card-body ">
    <h4>Bookmarked Blogs : </h4>
  </div>
</div>

<div className="card shadow-2xl mt-3" >
 
  <div className="card-body ">
    
    <p className="card-text"> {title} </p>
  </div>
</div>

        </div>
    );
};

export default Cart;