import React from 'react';

const Header = () => {
    return (
        <div>
            <div className= " container navbar bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand fw-bold fs-2 " >
      Knowledge<span className='text-danger'>Cafe</span>
    </p>
    
  <img src="https://picsum.photos/200" alt="Logo" width="50" height="50" className="d-inline-block align-text-top rounded-circle" />
  </div>
</div>
        </div>
    );
};

export default Header;