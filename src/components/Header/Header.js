import React from "react";
import logo from "../../images/code.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start text-teal-500 font-bold text-xl sm:text-3xl gap-3 mt-14 mb-12">
      <div>
        <img className="w-12 h-12 sm:w-16 sm:h-16" src={logo} alt="" />
      </div>
      <h1>DEVELOPMENT ACADEMY</h1>
    </div>
  );
};

export default Header;
