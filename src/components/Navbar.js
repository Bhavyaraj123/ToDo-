import React from "react";

const Navbar = (props) => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <nav className="navbar bg-dark w-100 d-flex justify-content-center" >
        <div className="d-flex  justify-content-center">
          <span className="h1 mb-0 text-light " >{props.name} </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
