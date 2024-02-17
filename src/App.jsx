import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import { LuLogIn } from "react-icons/lu";
import Navlinks from "./common/navbar/Navlinks";
import Footer from "./common/footer/Footer";


function App() {
  return (
    <div className="drawer lg:drawer-open font-roboto text-title">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#100f10]">
        {/* Page content here */}
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
      <div className="drawer-side bg-[#100f10] hidden lg:block">
        <ul className="menu p-4 w-80 min-h-full gap-5 text-title border-r border-r-[#737272]  border-opacity-30">
          {/* Sidebar content here */}
          <li className="flex flex-row items-center mb-3 justify-center">
            <h4 className=" text-xl font-medium flex gap-0">
              VELO.<span className=" text-p font-extrabold">CI</span>
            </h4>
            <img src="/public/logo.png" alt="" className="w-16 " />
          </li>
          <li className="">
            <p className=" text-sub">News Feed</p>
          </li>
          <Navlinks/>
          <li className=" relative -bottom-28">
            <NavLink
              to={"/login"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " border-l-2 border-r-2 border-[#ad241b] text-p"
                  : ""
              }
            >
              <LuLogIn className=" text-2xl font-bold mr-4" />
              <span className=" text-md font-semibold py-2">Login</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
