import { useState } from "react";
import Navlinks from "./Navlinks";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  // Function to handle input change
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // console.log(search)

  return (
    <div className="navbar lg:justify-between lg:px-10 z-20">
      <div className="navbar-start lg:hidden ">
        <div className="dropdown z-20 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#100f10]"
          >
            {/* {navLink} */}
            <Navlinks />
          </ul>
        </div>
      </div>
      <div className="navbar-center md:w-2/4">
        {/* 
          Todo 
          Add Search option
           */}
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange} // Handle input change
          placeholder="Search here"
          className=" rounded-l-md focus:outline-none px-3 py-2 w-full bg-[#e5e5e5] text-black border-l-2 border-[#f5c518]"
        />
        <Link to={`/search/${search}`} className="bg-[#f5c518] active:opacity-30 hover:opacity-60 py-2 px-3 border-r-2 border-r-[#f5c518] rounded-r-md">
          <CiSearch className="text-2xl text-white border-black" />
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
