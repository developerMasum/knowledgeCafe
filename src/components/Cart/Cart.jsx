import React from 'react';

const Cart = ({spendTime,title}) => {
    return (
        <div>
           <div className="spend-time"> <div className="card">
 
  <div className="card-body">
    <h5 className="card-title">Spent time on read :{spendTime}</h5>
    
   
  </div>
</div></div>

<div className="card" >
 
  <div className="card-body">
    <h4>Bookmarked Blogs : </h4>
    <p className="card-text"> {title} </p>
  </div>
</div>
        </div>
    );
};

export default Cart;