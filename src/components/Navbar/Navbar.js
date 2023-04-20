import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
function Navbar() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  };
  return (


    <div className=" flex justify-between w-full px-8  h-20 items-center  text-black bg-blue-200">
      <div className="flex">
        <button className="px-1" onClick={handleClick}>Login</button>
      </div>
      <div className="flex items-center font-medium justify-around">
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          <NavLinks />
          <li>
            <input className="border-solid" type="text" placeholder="Search Products" />
          </li>

        </ul>

      </div>
    </div>
  );
}

export default Navbar;
