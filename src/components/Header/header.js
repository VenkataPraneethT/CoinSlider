import React from "react";
// import Toggle from "../../atoms/toggle";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";


const Navbar = () => {
  let originClass =
    "mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800";

  return (
    <header className="text-gray-700 bg-transparent dark:bg-transparent body-font">
      <div className="flex lg:container p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="flex flex-auto md:justify-evenly justify-start">
          <NavLink
            to="/"
            className="flex items-center w-40 mb-4 font-medium text-gray-400 title-font md:mb-0"
          >
            <h4 className="flex-inline text-white">
              <Logo className="mr-2 inline-block" />
            </h4>
          </NavLink>
          <nav className="hidden md:flex flex-wrap justify-center items-baseline ml-4 pt-2 text-base flex-1">
            <NavLink
              to="/"
              className="mr-5 text-sm font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Markets
            </NavLink>
            <NavLink
              to="/"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Governance
            </NavLink>
            <NavLink
              to="/"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Price
            </NavLink>
            <NavLink
              to="javascript.void(0)"
              href="javascript.void(0)"
              className="mr-5 text-base font-semibold text-gray-400 dark:text-white rounded-xl hover:text-gray-800"
            >
              Docs
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b pb-2 text-indigo-600 border-gray-500"
                  : originClass
              }
            >
              Hatom Token
            </NavLink>
          </nav>
        </div>
       
      </div>
    </header>
  );
};

export default Navbar;
