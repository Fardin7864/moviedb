import { BsBrowserSafari, BsCalendar2DateFill } from "react-icons/bs";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { LuTv } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-l-2 border-r-2 border-[#ad241b] text-p active:text-p"
              : ""
          }
        >
          <BsBrowserSafari className=" text-2xl font-bold mr-4 " />
          <span className=" text-md font-semibold py-2">Browse</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/watchlist"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-l-2 border-r-2 border-[#ad241b] text-p"
              : ""
          }
        >
          <FiHeart className=" text-2xl font-bold mr-4" />
          <span className=" text-md font-semibold py-2">Watchlist</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/popular"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-l-2 border-r-2 border-[#ad241b] text-p"
              : ""
          }
        >
          <FaUsersViewfinder className=" text-2xl font-bold mr-4" />
          <span className=" text-md font-semibold py-2">Popular</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tv"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-l-2 border-r-2 border-[#ad241b] text-p"
              : ""
          }
        >
          <LuTv className=" text-2xl font-bold mr-4" />
          <span className=" text-md font-semibold py-2">TV Show</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/coming-soon"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " border-l-2 border-r-2 border-[#ad241b] text-p"
              : ""
          }
        >
          <BsCalendar2DateFill className=" text-2xl font-bold mr-4" />
          <span className=" text-md font-semibold py-2">Coming Soon</span>
        </NavLink>
      </li>
    </>
  );

  return navLink;
};

export default Navlinks;
